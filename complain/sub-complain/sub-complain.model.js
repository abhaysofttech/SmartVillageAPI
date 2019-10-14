const mongoose = require('mongoose');

const SubComplainTypeSchema = new mongoose.Schema({
    complainname: { type: String, required: true },
    subcomplainname: { type: String, unique: true, required: true },
    subcomplainTitle: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

SubComplainTypeSchema.set('toJSON', { virtuals: true }); 

module.exports = mongoose.model('SubComplainType', SubComplainTypeSchema);