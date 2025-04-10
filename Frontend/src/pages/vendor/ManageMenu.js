import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageMenu() {
    const [menu, setMenu] = useState([]);
    const [foodItem, setFoodItem] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
    });

    const fetchMenu = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/food");
            setMenu(res.data);
        } catch (error) {
            alert("Failed to load menu");
        }
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/food", foodItem);
            setFoodItem({ name: "", description: "", price: "", category: "" });
            fetchMenu();
        } catch (error) {
            alert("Failed to add food item");
        }
    };

    return (
        <div className="container mt-5">
            <h3>Manage Menu</h3>
            <form onSubmit={handleAdd} className="row g-3 mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        placeholder="Food Name"
                        className="form-control"
                        value={foodItem.name}
                        onChange={(e) => setFoodItem({ ...foodItem, name: e.target.value })}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="text"
                        placeholder="Category"
                        className="form-control"
                        value={foodItem.category}
                        onChange={(e) => setFoodItem({ ...foodItem, category: e.target.value })}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="text"
                        placeholder="Description"
                        className="form-control"
                        value={foodItem.description}
                        onChange={(e) => setFoodItem({ ...foodItem, description: e.target.value })}
                        required
                    />
                </div>
                <div className="col-md-4">
                    <input
                        type="number"
                        placeholder="Price"
                        className="form-control"
                        value={foodItem.price}
                        onChange={(e) => setFoodItem({ ...foodItem, price: e.target.value })}
                        required
                    />
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-success w-100">Add</button>
                </div>
            </form>

            <h5>Existing Menu</h5>
            <ul className="list-group">
                {menu.map((item) => (
                    <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.name} - ₹{item.price}
                        <span className="badge bg-primary rounded-pill">{item.category}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ManageMenu;
