const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const divisionSchema = new Schema({
    statename: { type: String, required: true },
    divisionname: { type: String, unique: true, required: true },
    divisionnameHindi: { type: String, unique: true, required: true },
    divisionnameMarathi: { type: String, unique: true, required: true },
});

divisionSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Division', divisionSchema);