import React from "react";
import "../Designs/Css/RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="container">
      {/* Left Section: Form */}
      <div className="left-section">
        <div className="form-container">
          <div className="logo">
            <h1>Kirbivent</h1>
          </div>
          <form>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="signup-btn">SIGN UP</button>
          </form>
          <p>Already have an account?</p>
          <button className="login-btn">LOG IN</button>
        </div>
      </div>

      {/* Right Section: Welcome Message */}
      <div className="right-section">
        <h2>Welcome!</h2>
        <footer>
          <p>Copyright &copy; 2024 Logo. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default RegisterPage;
