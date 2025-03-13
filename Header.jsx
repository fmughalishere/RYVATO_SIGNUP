import React from "react";
const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <h2>{title}</h2>
    </header>
  );
};
export default Header;
