// src/pages/RestaurantDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RestaurantDetails() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/restaurant/${id}`);
                setRestaurant(res.data);
                setMenuItems(res.data.menu); // assuming 'menu' is an array of items
            } catch (error) {
                alert("Failed to load restaurant details");
            }
        };
        fetchDetails();
    }, [id]);

    return (
        <div className="container mt-5">
            {restaurant ? (
                <>
                    <h2 className="mb-3">{restaurant.name}</h2>
                    <p className="text-muted">{restaurant.description}</p>

                    <h4 className="mt-4">Menu</h4>
                    <div className="row">
                        {menuItems.length > 0 ? (
                            menuItems.map((item, index) => (
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p className="fw-bold">₹{item.price}</p>
                                            <button className="btn btn-sm btn-primary">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No menu items available.</p>
                        )}
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RestaurantDetails;
