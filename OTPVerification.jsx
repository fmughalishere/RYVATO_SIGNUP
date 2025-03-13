import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; 
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };
  const handleVerify = (e) => {
    e.preventDefault();
    const otpCode = otp.join(""); 
    if (otpCode.length === 4) {
      navigate("/success");
    } else {
      alert("Please enter a 4-digit OTP.");
    }
  };
  return (
    <div className="container">
      <div className="left">
        <h2 className="logo">RYVATO</h2>
        <p className="tagline"><b>"One-Stop Shop for Project Managers"</b></p>
      </div>
      <div className="right">
        <h2 className="title">OTP Verification!</h2>
        <p className="subtitle"><b>Enter OTP</b></p>
        <p className="info">We have sent an OTP to your mobile number</p>

        <form onSubmit={handleVerify}>
          <div className="otp-container">
            {otp.map((digit, index) => (
              <React.Fragment key={index}>
                <input
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  required
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                />
                {index < otp.length - 1 && <span className="dash">-</span>}
              </React.Fragment>
            ))}
          </div>
          <button type="submit" className="btn">Verify</button>
          <p className="resend">
            Didn’t receive code? <a href="#">Resend OTP</a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default OTPVerification;
