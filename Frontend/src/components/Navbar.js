import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [userType, setUserType] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserType = localStorage.getItem("userType");
        setUserType(storedUserType);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setUserType(null);
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Fusion Portion</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/restaurants">Restaurants</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>

                        {userType === "user" && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-sm btn-outline-light ms-2" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        )}

                        {userType === "vendor" && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/vendor/dashboard">Vendor Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-sm btn-outline-light ms-2" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        )}

                        {!userType && (
                            <>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" data-bs-toggle="dropdown">
                                        User
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                        <li><Link className="dropdown-item" to="/register">Register</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="vendorDropdown" data-bs-toggle="dropdown">
                                        Vendor
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><Link className="dropdown-item" to="/vendor/login">Login</Link></li>
                                        <li><Link className="dropdown-item" to="/vendor/register">Register</Link></li>
                                    </ul>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
