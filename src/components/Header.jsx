import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Navigate">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
