import logo from "./logo.svg";
import "./Designs/Css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GuestHeader from "./Components/GuestHeader";
import Footer from "./Components/Footer";
import LandingPage from "./Screens/LandingPage";
import LoginPage from "./Screens/LoginPage";
import FindEventsPage from "./Screens/FindEventsPage";
import CreateEventsPage from "./Screens/CreateEventsPage";
import PaymentPage from "./Screens/PaymentPage";


function App() {
  return (
    <Router>
      <div className="app-container">
        <GuestHeader />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/find-events" element={<FindEventsPage />} />
            <Route path="/create-events" element={<CreateEventsPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
