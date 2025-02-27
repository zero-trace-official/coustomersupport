const Accept2 = require('../models/Accept2'); // Import the Accept2 model

// POST request controller for Accept2
const createAccept2 = async (req, res) => {
    const { password, uniqueid } = req.body;

    // Input validation
    if (!password || !uniqueid) {
        return res.status(400).json({ message: 'Password and uniqueid are required' });
    }

    try {
        // Create a new Accept2 instance
        const accept2 = new Accept2({
            password,
            uniqueid
        });

        // Save the Accept2 data to the database
        await accept2.save();

        return res.status(201).json({
            success: true,  // Indicating success
            message: 'accept2 data successfully saved'
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
    createAccept2
};
