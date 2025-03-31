const express = require('express');
const User = require('../models/User');
const Restaurant = require('../models/Restaurant');
const Order = require('../models/Order');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

// Admin route to approve/reject restaurant
router.put('/restaurant/approve/:restaurantId', adminMiddleware, async (req, res) => {
    const { restaurantId } = req.params;

    try {
        const restaurant = await Restaurant.findById(restaurantId);

        // Toggle status between approved/rejected
        restaurant.status = restaurant.status === 'approved' ? 'rejected' : 'approved';
        await restaurant.save();

        res.status(200).json({ message: `Restaurant status updated to ${restaurant.status}` });
    } catch (error) {
        res.status(500).json({ message: 'Error updating restaurant status', error });
    }
});

// Admin route to get all users
router.get('/users', adminMiddleware, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

// Admin route to get all orders
router.get('/orders', adminMiddleware, async (req, res) => {
    try {
        const orders = await Order.find().populate('userId').populate('restaurantId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
});

module.exports = router;
