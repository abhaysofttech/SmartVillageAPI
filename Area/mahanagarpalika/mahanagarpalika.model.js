const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mahanagarpalikaSchema = new Schema({
    statename: { type: String, required: true },
    divisionname: { type: String, required: true },
    districtname: { type: String, required: true },
    mahanagarpalikaname: { type: String, unique: true, required: true },
    mahanagarpalikanameHindi: { type: String, unique: true, required: true },
    mahanagarpalikanameMarathi: { type: String, unique: true, required: true },
});

mahanagarpalikaSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Mahanagarpalika', mahanagarpalikaSchema);