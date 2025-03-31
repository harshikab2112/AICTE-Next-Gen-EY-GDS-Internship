const express = require("express");
const Vendor = require("../models/Vendor");
const router = express.Router();

// Get Vendor Details
router.get("/profile", async (req, res) => {
    try {
        const vendor = await Vendor.findOne({ email: req.user.email });
        res.status(200).json(vendor);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
