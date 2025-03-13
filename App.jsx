import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/SignUp";
import OTP from "./Pages/OTP";
import Success from "./Pages/Success";
import "./app.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}
export default App;
