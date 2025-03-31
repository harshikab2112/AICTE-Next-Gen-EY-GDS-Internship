const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    foodItems: [
        {
            foodId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Food',
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'preparing', 'on the way', 'delivered'],
        default: 'pending',
    },
    paymentMethod: {
        type: String,
        enum: ['COD', 'Online'], // Can either be 'COD' or 'Online' based on user selection
        default: 'COD',
    },
});

module.exports = mongoose.model('Order', orderSchema);
