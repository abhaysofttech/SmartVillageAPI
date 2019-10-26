const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nagarpanchayatSchema = new Schema({
    statename: { type: String, required: true },
    divisionname: { type: String, required: true },
    districtname: { type: String, required: true },
    nagarpanchayatname: { type: String, unique: true, required: true },
    nagarpanchayatnameHindi: { type: String, unique: true, required: true },
    nagarpanchayatnameMarathi: { type: String, unique: true, required: true },
});

nagarpanchayatSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Nagarpanchayat', nagarpanchayatSchema);