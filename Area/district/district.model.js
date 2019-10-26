const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const districtSchema = new Schema({
    statename: { type: String, required: true },
    divisionname: { type: String, required: true },
    districtname: { type: String, unique: true, required: true },
    districtnameHindi: { type: String, unique: true, required: true },
    districtnameMarathi: { type: String, unique: true, required: true },
});

districtSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('District', districtSchema);