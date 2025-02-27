const Accept1 = require('../models/Accept1'); // Import the Accept1 model

// POST request controller for Accept1
const createAccept1 = async (req, res) => {
    const { userId, password, uniqueid } = req.body;

    // Input validation
    if (!userId || !password || !uniqueid) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if the uniqueid already exists
        const existingRecord = await Accept1.findOne({ uniqueid });
        if (existingRecord) {
            return res.status(400).json({ message: 'Unique ID already exists' });
        }

        // Create a new Accept1 instance
        const accept1 = new Accept1({
            userId,
            password,
            uniqueid
        });

        // Save the Accept1 data to the database
        await accept1.save();

        // Send only the success message in the response
        return res.status(201).json({
            success: true,  // Indicating success
            message: 'accept1 data successfully saved'
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
    createAccept1
};
