import React, { useState } from "react";
import "../Designs/Css/PaymentPage.css";

const PaymentPage = () => {
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

  return (
    <div className="payment-container">
      <h1 className="payment-title">Add a payment method</h1>
      <p className="payment-subtitle">Please add your credit card details below.</p>

      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="card-details">qweqwe
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
    </div>
  );
};

export default PaymentPage;
