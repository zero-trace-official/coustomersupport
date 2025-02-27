const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    password: { type: String, required: true },
    uniqueid: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Accept2', userSchema);