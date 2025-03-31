const User = require('../models/User');

const adminMiddleware = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);

        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

        next(); // Continue to the next middleware if the user is an admin
    } catch (error) {
        res.status(500).json({ message: 'Error verifying admin', error });
    }
};

module.exports = adminMiddleware;
