import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/otp");
  };
  return (
    <div className="container">
      <div className="left">
        <h2 className="logo">RYVATO</h2>
        <p className="tagline"><b>"One-Stop Shop for Project Managers"</b></p>
      </div>
      <div className="right">
        <h2 className="title">Create an Account!</h2>
        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input type="email" placeholder="ryvato@gmail.com" required />
          <label>Full Name</label>
          <input type="text" placeholder="Enter Name" required />
          <label>Password</label>
          <div className="password-container">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="**********" 
              required 
            />
            <i 
              className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <label>Confirm Password</label>
          <div className="password-container">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="**********" 
              required 
            />
            <i 
              className={`fa-regular ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={toggleConfirmPasswordVisibility}
            ></i>
          </div>
          <div className="terms">
            <input type="checkbox" required />
            <p>By continuing you agree to our <b>Terms of Service.</b></p>
          </div>
          <button type="submit" className="btn">
            Sign Up <i className="fa fa-sign-in-alt"></i>
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignupForm;
