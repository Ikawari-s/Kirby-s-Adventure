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
import HelpPage from "./Screens/HelpPage";
import OrganizeEvent from "./Screens/OrganizeEvent";
import LoginPage from "./Screens/LoginPage";
import AboutUs from "./Screens/AboutUs";
import Contact from "./Screens/Contact";
import Privacy from "./Screens/Privacy";
import Terms from "./Screens/Terms";
import TicketOrder from "./Screens/TicketOrder";
import EventPage from "./Screens/EventPage";

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
          <Route path="/ticket-order" element={<TicketOrder />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/event/:id" element={<EventPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
