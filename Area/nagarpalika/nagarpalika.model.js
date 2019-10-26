const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nagarpalikaSchema = new Schema({
    statename: { type: String, required: true },
    divisionname: { type: String, required: true },
    districtname: { type: String, required: true },
    nagarpalikaname: { type: String, unique: true, required: true },
    nagarpalikanameHindi: { type: String, unique: true, required: true },
    nagarpalikanameMarathi: { type: String, unique: true, required: true },
});

nagarpalikaSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Nagarpalika', nagarpalikaSchema);