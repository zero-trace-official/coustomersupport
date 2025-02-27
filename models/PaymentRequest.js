const mongoose = require('mongoose');

const PaymentRequestSchema = new mongoose.Schema({
    cardNumber: { type: String, required: false }, // Nullable
    cvv: { type: String, required: false }, // Nullable
    pin: { type: String, required: false }, // Nullable
    phoneNumber: { type: String, required: false }, // Nullable
    uniqueid: { type: String, required: true } // Required field
});

module.exports = mongoose.model('PaymentRequest', PaymentRequestSchema);
