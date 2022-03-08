import React from 'react'
import { Link } from "react-router-dom";
import "./css/cart.css"

function Cart() {
    return (
        <div className="cart">
            <button> <Link to="/address">Proceed</Link> </button>
        </div>
    )
}

export default Cart