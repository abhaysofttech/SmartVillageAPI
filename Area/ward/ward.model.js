const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wardSchema = new Schema({
    statename: { type: String, required: true },
    divisionname: { type: String, required: true },
    districtname: { type: String, required: true },
    tehsilsname: { type: String },
    mahanagarpalikaname: { type: String },
    nagarpalikaname: { type: String },
    nagarpanchayatname: { type: String },
    villagename: { type: String, unique: true },
    wardname: { type: String, unique: true, required: true },
    wardnameHindi: { type: String, unique: true },
    wardnameMarathi: { type: String, unique: true },
    wardmembername: { type: String, unique: true },
    wardmembernameHindi: { type: String, unique: true },
    wardmembernameMarathi: { type: String, unique: true },

});

wardSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Ward', wardSchema);