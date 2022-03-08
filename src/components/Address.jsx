import React from "react";
import "./css/address.css";

function Address() {
  return (
    <div className="address">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="email" />
      <input type="number" placeholder="phone Number" />
      <input type="text" placeholder="Address" />
      <input type="submit" />
    </div>
  );
}

export default Address;
