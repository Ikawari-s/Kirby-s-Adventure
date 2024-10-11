import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import "../Designs/Css/PaymentPage.css";

const PaymentPage = () => {
  const [sdkReady, setSdkReady] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    nameOnCard: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the payment submission logic here
    console.log("Form submitted:", formData);
  };

  const onError = (err) => {
    console.error("PayPal SDK error:", err);
  };

  useEffect(() => {
    const addPayPalScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AZ6hae1t5ioxaMWWiAd5uTYQPu2uJGbTtz_Pjjde_KcrdtK8iIJDzrxvBs1T7Y7JA4tV4BK5ve9tLNPK&currency=USD";
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    addPayPalScript();
    const hasReloaded = localStorage.getItem("hasReloaded");
    if (!hasReloaded) {
      addPayPalScript();
      window.location.reload();
      localStorage.setItem("hasReloaded", true);
    }

    return () => {
      document.body.removeChild(document.body.lastChild);
    };
  }, []);

  const createOrderHandler = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "50.00", // Total amount for the tickets
            currency_code: "USD",
            breakdown: {
              item_total: { currency_code: "USD", value: "40.00" }, // Ticket price total
              tax_total: { currency_code: "USD", value: "5.00" }, // Tax
              shipping: { currency_code: "USD", value: "0.00" }, // No shipping for digital tickets
              handling: { currency_code: "USD", value: "5.00" }, // Service fee
            },
          },
          description: "Event tickets for XYZ Concert", // Description of the purchase
          items: [
            {
              name: "General Admission Ticket", // Ticket type or name
              unit_amount: {
                currency_code: "USD",
                value: "20.00", // Price of each ticket
              },
              quantity: "2", // Number of tickets being purchased
            },
            {
              name: "Service Fee", // Optional service fee
              unit_amount: {
                currency_code: "USD",
                value: "5.00",
              },
              quantity: "1", // Quantity of the service fee
            },
          ],
        },
      ],
    });
  };

  const onSuccessHandler = (details, data) => {
    console.log("Payment successful:", details);

    setShowConfirmation(true);
  };

  const onApproveHandler = async (data, actions) => {
    const order = await actions.order.capture();
    console.log("Order captured:", order);

    onSuccessHandler(order);
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Add a payment method</h1>
      <p className="payment-subtitle">
        Please add your credit card details below.
      </p>

      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="card-details">
          qweqwe
          <div className="card-input">
            <label>Card number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card number"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="card-input">
            <label>MM / YY</label>
            <input type="text" placeholder="MM / YY" />
          </div>
        </div>

        <div className="form-group">
          <div className="input-field">
            <label>Name on card</label>
            <input
              type="text"
              name="nameOnCard"
              placeholder="Name on card"
              value={formData.nameOnCard}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-field">
            <label>Address line 1</label>
            <input
              type="text"
              name="address1"
              placeholder="Address line 1"
              value={formData.address1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>State</label>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-field">
            <label>Address line 2 (optional)</label>
            <input
              type="text"
              name="address2"
              placeholder="Address line 2"
              value={formData.address2}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="payment-actions">
          <button type="submit" className="btn-submit">
            Add payment method
          </button>
          <button type="button" className="btn-cancel">
            Cancel
          </button>
        </div>

        <p className="disclaimer">
          By providing your credit details and adding this payment method, you
          authorize the payment service provider to charge your account based on
          the selected method.
        </p>
      </form>

      <div className="mt-3">
        <PayPalScriptProvider
          options={{
            "client-id":
              "AZ6hae1t5ioxaMWWiAd5uTYQPu2uJGbTtz_Pjjde_KcrdtK8iIJDzrxvBs1T7Y7JA4tV4BK5ve9tLNPK",
          }}
        >
          <PayPalButtons
            createOrder={createOrderHandler}
            onSuccess={onSuccessHandler}
            onApprove={onApproveHandler}
            onError={onError}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default PaymentPage;
