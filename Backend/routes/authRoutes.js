const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Vendor = require("../models/Vendor");
const router = express.Router();

// Register User
router.post("/register/user", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Register Vendor
router.post("/register/vendor", async (req, res) => {
    const { name, email, password, restaurantName } = req.body;

    try {
        const vendorExists = await Vendor.findOne({ email });
        if (vendorExists) {
            return res.status(400).json({ message: "Vendor already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newVendor = new Vendor({
            name,
            email,
            password: hashedPassword,
            restaurantName,
        });

        await newVendor.save();
        res.status(201).json({ message: "Vendor registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Login User or Vendor
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        const vendor = await Vendor.findOne({ email });

        if (!user && !vendor) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        let isMatch = false;
        let userType = "";

        if (user) {
            isMatch = await bcrypt.compare(password, user.password);
            userType = "user";
        } else if (vendor) {
            isMatch = await bcrypt.compare(password, vendor.password);
            userType = "vendor";
        }

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { email: user ? user.email : vendor.email, userType },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ token, userType, message: "Login successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
