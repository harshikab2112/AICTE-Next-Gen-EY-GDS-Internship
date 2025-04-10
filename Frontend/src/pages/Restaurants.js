import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/restaurant");
                setRestaurants(res.data);
            } catch (error) {
                alert("Failed to load restaurants");
            }
        };
        fetchRestaurants();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Top Restaurants Near You</h2>
            <div className="row">
                {[
                    {
                        name: "The Spice Route",
                        cuisine: "Indian",
                        image: "/images/rest1.jpg",
                        rating: 4.5,
                    },
                    {
                        name: "Noodle Nation",
                        cuisine: "Chinese",
                        image: "/images/rest2.jpg",
                        rating: 4.3,
                    },
                    {
                        name: "Pasta Paradise",
                        cuisine: "Italian",
                        image: "/images/rest3.jpg",
                        rating: 4.6,
                    },
                ].map((rest, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={rest.image}
                                className="card-img-top"
                                alt={rest.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{rest.name}</h5>
                                <p className="card-text">{rest.cuisine} Cuisine</p>
                                <p className="text-warning mb-0">
                                    {"⭐".repeat(Math.floor(rest.rating))} ({rest.rating})
                                </p>
                            </div>
                            <div className="card-footer text-center bg-white border-top-0">
                                <a href="/restaurants" className="btn btn-outline-primary btn-sm">
                                    View Menu
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className="my-5" />

            <h2 className="mb-4">All Restaurants</h2>
            <div className="row">
                {restaurants.map((restaurant) => (
                    <div key={restaurant._id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{restaurant.name}</h5>
                                <p className="card-text">{restaurant.description}</p>
                                <Link to={`/restaurant/${restaurant._id}`} className="btn btn-outline-primary">
                                    View Menu
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Restaurants;
