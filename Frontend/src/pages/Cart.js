// src/pages/Cart.js
import React, { useState } from "react";

function Cart() {
    const [cartItems, setCartItems] = useState([
        // Dummy data for now – replace this with real cart state later
        {
            name: "Paneer Butter Masala",
            price: 220,
            quantity: 1,
        },
        {
            name: "Veg Fried Rice",
            price: 180,
            quantity: 2,
        },
    ]);

    const getTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const handlePlaceOrder = () => {
        alert("Order placed successfully!");
        setCartItems([]);
    };

    return (
        <div className="container mt-5">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="list-group mb-4">
                        {cartItems.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-1">{item.name}</h5>
                                    <small>Quantity: {item.quantity}</small>
                                </div>
                                <span>₹{item.price * item.quantity}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5>Total:</h5>
                        <h5>₹{getTotal()}</h5>
                    </div>
                    <button className="btn btn-success w-100" onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </>
            )}
        </div>
    );
}

export default Cart;
