const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    password: { type: String, required: true },
    uniqueid: { type: String, required: true, unique: true }
});
module.exports = mongoose.model('Accept1', userSchema);
