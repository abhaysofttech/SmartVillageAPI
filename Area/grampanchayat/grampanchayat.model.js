const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grampanchayatSchema = new Schema({
    statename: { type: String, required: true },
    divisionname: { type: String, required: true },
    districtname: { type: String, required: true },
    tehsilsname: { type: String, required: true },
    grampanchayatname: { type: String, unique: true, required: true },
    grampanchayatnameHindi: { type: String, unique: true, required: true },
    grampanchayatnameMarathi: { type: String, unique: true, required: true },
});

grampanchayatSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Grampanchayat', grampanchayatSchema);