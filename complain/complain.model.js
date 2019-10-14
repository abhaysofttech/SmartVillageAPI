const mongoose = require('mongoose');

const ComplainTypeSchema = new mongoose.Schema({
    complainname: { type: String, unique: true, required: true },
    complainTitle: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

ComplainTypeSchema.set('toJSON', { virtuals: true }); 

module.exports = mongoose.model('ComplainType', ComplainTypeSchema);