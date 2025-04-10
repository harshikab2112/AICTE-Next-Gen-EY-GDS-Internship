import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VendorRegister() {
    const [vendorData, setVendorData] = useState({
        name: "",
        email: "",
        password: "",
        restaurantName: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setVendorData({ ...vendorData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register/vendor", vendorData);
            alert("Vendor Registered! Login now.");
            navigate("/vendor/login");
        } catch (err) {
            alert("Registration failed. Try again.");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h2>Vendor Register</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label>Name</label>
                    <input name="name" className="form-control" required onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input name="email" type="email" className="form-control" required onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" required onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label>Restaurant Name</label>
                    <input name="restaurantName" className="form-control" required onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-success w-100">Register</button>
            </form>
        </div>
    );
}

export default VendorRegister;
