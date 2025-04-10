import React from "react";

const UserDashboard = () => {
    const username = localStorage.getItem("username");

    return (
        <div className="container mt-5">
            <h2>Welcome, {username || "User"}!</h2>
            <p className="lead">This is your dashboard. You can view your orders, update your profile, and more.</p>
            <hr />
            {/* Add more sections here as you build */}
        </div>
    );
};

export default UserDashboard;
