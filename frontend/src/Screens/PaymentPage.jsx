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

  // Fixed temporary order ID
  const fixedOrderId = "ORDER-1234567890"; // Replace with your desired fixed ID

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        "https://www.paypal.com/sdk/js?client-id=AZ6hae1t5ioxaMWWiAd5uTYQPu2uJGbTtz_Pjjde_KcrdtK8iIJDzrxvBs1T7Y7JA4tV4BK5ve9tLNPK&currency=USD"; // Replace with your sandbox client ID
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!sdkReady) {
      addPayPalScript();
    }

    return () => {
      const lastScript = document.body.lastChild;
      if (lastScript && lastScript.tagName === "SCRIPT") {
        document.body.removeChild(lastScript);
      }
    };
  }, [sdkReady]);

  const createOrderHandler = async (data, actions) => {
    // Use the fixed order ID
    console.log("Fixed Order ID:", fixedOrderId); // Log the fixed order ID for reference

    // Return the fixed order ID
    return fixedOrderId;
  };

  const onApproveHandler = async (data, actions) => {
    // Simulate order approval
    console.log("Payment approved for Order ID:", data.orderID);
    setShowConfirmation(true);
  };

  return (
    <div className="high">
      <div className="payment-container">
        <h1 className="payment-title">Add a payment method</h1>
        <p className="payment-subtitle">
          Please add your credit card details below.
        </p>

        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="card-details">
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
            authorize the payment service provider to charge your account.
          <br/> <br/>
            Have a problem with the payment? Contact us on kirbi_vent@gmail.com{" "}
          </p>
        </form>

        <div className="mt-3">
          {sdkReady ? (
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AZ6hae1t5ioxaMWWiAd5uTYQPu2uJGbTtz_Pjjde_KcrdtK8iIJDzrxvBs1T7Y7JA4tV4BK5ve9tLNPK", // Replace with your sandbox client ID
              }}
            >
              <PayPalButtons
                createOrder={createOrderHandler}
                onApprove={onApproveHandler}
                onError={onError}
              />
            </PayPalScriptProvider>
          ) : (
            <div>Loading PayPal...</div>
          )}
        </div>

        {showConfirmation && <p>Payment successful!</p>}
      </div>
    </div>
  );
};

export default PaymentPage;
