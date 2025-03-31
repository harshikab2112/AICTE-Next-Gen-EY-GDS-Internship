const express = require("express");
const Restaurant = require("../models/Restaurant");
const router = express.Router();

// Get All Restaurants
router.get("/", async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Get Restaurant Details
router.get("/:id", async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
