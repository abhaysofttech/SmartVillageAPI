const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tehsilsSchema = new Schema({
    statename: { type: String, required: true },
    divisionname: { type: String, required: true },
    districtname: { type: String, required: true },
    tehsilsname: { type: String, unique: true, required: true },
    tehsilsnameHindi: { type: String, unique: true, required: true },
    tehsilsnameMarathi: { type: String, unique: true, required: true },
});

tehsilsSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Tehsils', tehsilsSchema);