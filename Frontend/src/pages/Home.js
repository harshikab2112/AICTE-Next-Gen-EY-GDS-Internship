import React from "react";

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-4 fw-bold">Fusion Portion</h1>
                        <p className="lead">
                            Order your favorite meals from top-rated restaurants near you. Quick delivery, fresh food, and delicious flavors!
                        </p>
                        <a href="/restaurants" className="btn btn-primary btn-lg mt-3">Explore Restaurants</a>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="/images/hero-food.jpg"
                            alt="Food Banner"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
            </div>

            {/* Cuisine Carousel Section */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Popular Cuisines</h2>
                <div
                    id="cuisineCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="2500"
                >
                    <div className="carousel-inner rounded shadow">
                        {[
                            {
                                name: "Indian Cuisine",
                                img: "/images/indian.jpg",
                                desc: "Spices, flavors, and delicious tradition in every bite.",
                            },
                            {
                                name: "Chinese Cuisine",
                                img: "/images/chinese.jpg",
                                desc: "Savory stir-fries, noodles, and aromatic sauces.",
                            },
                            {
                                name: "Italian Cuisine",
                                img: "/images/italian.jpg",
                                desc: "Pasta, pizza, and rich Mediterranean heritage.",
                            },
                            {
                                name: "Mexican Cuisine",
                                img: "/images/mexican.jpg",
                                desc: "Bold flavors with tacos, burritos, and more.",
                            },
                            {
                                name: "Thai Cuisine",
                                img: "/images/thai.jpg",
                                desc: "A perfect balance of sweet, sour, spicy, and salty.",
                            },
                            {
                                name: "American Cuisine",
                                img: "/images/american.jpg",
                                desc: "Burgers, fries, and iconic comfort food.",
                            },
                        ].map((cuisine, index) => (
                            <div
                                className={`carousel-item ${index === 0 ? "active" : ""}`}
                                key={index}
                            >
                                <img
                                    src={cuisine.img}
                                    className="d-block w-100"
                                    alt={cuisine.name}
                                    style={{ height: "400px", objectFit: "cover" }}
                                />
                                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                                    <h5>{cuisine.name}</h5>
                                    <p>{cuisine.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#cuisineCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#cuisineCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>



            {/* Features Section */}
            <div className="bg-light py-5">
                <div className="container text-center">
                    <h2 className="mb-4">Why Choose Us?</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/images/fast-delivery.png" alt="Fast Delivery" className="img-fluid mb-3" style={{ height: "100px" }} />
                            <h5>Fast Delivery</h5>
                            <p>Get your food delivered hot and fresh, in no time!</p>
                        </div>
                        <div className="col-md-4">
                            <img src="/images/fresh-food.png" alt="Fresh Food" className="img-fluid mb-3" style={{ height: "100px" }} />
                            <h5>Fresh Ingredients</h5>
                            <p>We partner with restaurants that serve only fresh meals.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="/images/easy-order.png" alt="Easy Ordering" className="img-fluid mb-3" style={{ height: "100px" }} />
                            <h5>Easy Ordering</h5>
                            <p>Place orders with just a few clicks on your phone or laptop.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
