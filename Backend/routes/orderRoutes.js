const express = require('express');
const Order = require('../models/Order');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Route to place an order
router.post('/place-order', authMiddleware, async (req, res) => {
    const { restaurantId, foodItems, totalAmount, paymentMethod } = req.body;

    try {
        // Create a new order
        const newOrder = new Order({
            userId: req.user._id, // User info comes from authMiddleware
            restaurantId,
            foodItems,
            totalAmount,
            paymentMethod: paymentMethod || 'COD', // Default to COD if not provided
        });

        await newOrder.save();
        res.status(200).json({ message: 'Order placed successfully', newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error placing order', error });
    }
});

module.exports = router;
