import React, { useEffect, useState } from "react";
import axios from "axios";

function VendorOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/order");
                setOrders(res.data);
            } catch (err) {
                alert("Failed to load orders");
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className="container mt-5">
            <h3>Vendor Orders</h3>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul className="list-group">
                    {orders.map((order) => (
                        <li key={order._id} className="list-group-item">
                            <strong>Customer:</strong> {order.customerId}<br />
                            <strong>Items:</strong> {order.items.map(item => item.name).join(", ")}<br />
                            <strong>Status:</strong> {order.status}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default VendorOrders;
