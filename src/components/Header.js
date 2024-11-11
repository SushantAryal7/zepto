import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <h2>zepto</h2>
      </div>
      <div>
        <p>deleveri in two minutes</p>
        <p>location</p>
      </div>
      <div>
        <input placeholder="......."></input>
      </div>
      <div>login</div>
      <div>cart</div>
    </header>
  );
}

export default Header;
