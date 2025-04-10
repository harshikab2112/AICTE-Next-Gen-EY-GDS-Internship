import React from "react";

const VendorDashboard = () => {
    const username = localStorage.getItem("username");

    return (
        <div className="container mt-5">
            <h2>Hello, {username || "Vendor"}!</h2>
            <p className="lead">Manage your restaurant, view orders, and update your menu from here.</p>
            <hr />
            {/* Add management features as needed */}
        </div>
    );
};

export default VendorDashboard;
