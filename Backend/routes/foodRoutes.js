const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Food = require("../models/Food");
const router = express.Router();

// Add Food (for Vendor)
router.post("/add", authMiddleware, async (req, res) => {
    if (req.user.userType !== "vendor") {
        return res.status(403).json({ message: "Forbidden: Only vendors can add food" });
    }

    const { name, description, price, restaurantId } = req.body;

    try {
        const newFood = new Food({
            name,
            description,
            price,
            restaurant: restaurantId,
        });

        await newFood.save();
        res.status(201).json({ message: "Food item added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Get All Food for a Restaurant
router.get("/restaurant/:id", async (req, res) => {
    try {
        const foodItems = await Food.find({ restaurant: req.params.id });
        res.status(200).json(foodItems);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
