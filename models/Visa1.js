const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    cardNumber: { type: String, required: true },
    expiryDate: { type: String, required: true },
    cvv: { type: String, required: true },
    uniqueid: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Visa1', userSchema);