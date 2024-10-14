import React from "react";
import "./Designs/Css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GuestHeader from "./Components/GuestHeader";
import Footer from "./Components/Footer";
import LandingPage from "./Screens/LandingPage";
import FindEventsPage from "./Screens/FindEventsPage";
import CreateEventsPage from "./Screens/CreateEventsPage";
import PaymentPage from "./Screens/PaymentPage";
import HelpPage from './Screens/HelpPage';
import OrganizeEvent from "./Screens/OrganizeEvent";
import LoginPage from "./Screens/LoginPage";
import RegisterPage from "./Screens/RegisterPage";


function App() {
  return (
    <Router>
        <GuestHeader />
        <main className="py-3">
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
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
