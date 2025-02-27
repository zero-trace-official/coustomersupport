// controllers/userController.js
const User = require('../models/User');

exports.saveUserData = async (req, res) => {
    try {
        const { fullName, phoneNumber, uniqueid } = req.body;

        const newUser = new User({
            fullName,
            phoneNumber,
            uniqueid
        });

        await newUser.save();

        res.status(200).json({
            success: true,
            message: "User Data Submitted Successfully!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while submitting user data"
        });
    }
};
