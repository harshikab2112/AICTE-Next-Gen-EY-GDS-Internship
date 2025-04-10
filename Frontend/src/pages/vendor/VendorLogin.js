import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VendorLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            if (res.data.userType === "vendor") {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userType", "vendor");
                navigate("/vendor/dashboard");
            } else {
                alert("Access Denied: Not a vendor");
            }
        } catch (err) {
            alert("Login failed. Check your credentials.");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "500px" }}>
            <h2>Vendor Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-dark w-100">Login</button>
            </form>
        </div>
    );
}

export default VendorLogin;
