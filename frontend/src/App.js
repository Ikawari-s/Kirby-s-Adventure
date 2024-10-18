import React from "react";
import "./Designs/Css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GuestHeader from "./Components/GuestHeader";
import Footer from "./Components/Footer";
import LandingPage from "./Screens/LandingPage";
import RegisterPage from "./Screens/RegisterPage";
import FindEventsPage from "./Screens/FindEventsPage";
import CreateEventsPage from "./Screens/CreateEventsPage";
import PaymentPage from "./Screens/PaymentPage";
import HelpPage from './Screens/HelpPage';
import OrganizeEvent from "./Screens/OrganizeEvent";
import LoginPage from "./Screens/LoginPage";
import AboutUs from "./Screens/AboutUs";
import Contact from "./Screens/Contact";
import Privacy from "./Screens/Privacy";
import Terms from "./Screens/Terms";


function App() {
  return (
    <Router>
        <GuestHeader />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/find-events" element={<FindEventsPage />} />
            <Route path="/create-events" element={<CreateEventsPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/organize-events" element={<OrganizeEvent />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/terms" element={<AboutUs />} />
            <Route path="/privacy" element={<Terms />} />
            <Route path="/contact" element={<Privacy />} />
            <Route path="/about-us" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
