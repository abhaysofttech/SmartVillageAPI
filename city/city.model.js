const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    cityname: { type: String,  required: true },
    statename: { type: String, required: true },
});

citySchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('City', citySchema);