import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import LandingPage from './Screens/LandingPage';
import LoginPage from './Screens/LoginPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<  LandingPage />} />
        <Route path="/login" element={<  LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
