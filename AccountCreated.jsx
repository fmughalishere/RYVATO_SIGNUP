import React from "react";
import { useNavigate } from "react-router-dom";
const AccountCreated = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
        <div className="left">
            <h2 className="logo">RYVATO</h2>
            <p className="tagline"><b>"One-Stop Shop for Project Managers"</b></p>
        </div>
        <div className="right">
            <div className="success-icon">
                <i className="fa-solid fa-check"></i>
            </div>
            <h2 className="title">Account Created!</h2>
            <p className="subtitle">You have successfully created your account,</p>
            <p className="subtitle">Now you can download the app and login.</p>
            
        </div>
    </div>
  );
};
export default AccountCreated;
