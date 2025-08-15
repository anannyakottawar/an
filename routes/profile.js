const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Save or update profile
router.post('/profile', async (req, res) => {
    const { Name, Contact, Address } = req.body;

    try {
        let user = await User.findOne({ contact: Contact });

        if (!user) {
            // Create new user if not found
            user = new User({ name: Name, contact: Contact, address: Address });
        } else {
            // Update existing user
            user.name = Name;
            user.contact = Contact;
            user.address = Address;
        }

        await user.save();
        res.json({ success: true, message: "Profile saved successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
});

module.exports = router;
