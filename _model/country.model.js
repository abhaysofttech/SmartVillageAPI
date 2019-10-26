const divisionSchema = new Schema({
    statename: { type: String, required: true },
    divisionname: { type: String, unique: true, required: true },
    divisionnameHindi: { type: String, unique: true, required: true },
    divisionnameMarathi: { type: String, unique: true, required: true },
});
const districtSchema = new Schema({
    statename: { type: String, required: true },
    divisionname: { type: String, required: true },
    districtname: { type: String, unique: true, required: true },
    districtnameHindi: { type: String, unique: true, required: true },
    districtnameMarathi: { type: String, unique: true, required: true },
});
const indiaSchema = new Schema({
    statename: { type: String, unique: true, required: true },
    statenameHindi: { type: String, unique: true, required: true },
    statenameMarathi: { type: String, unique: true, required: true },
    divisions:[divisionSchema],
    divisionname: { type: String, unique: true, required: true },
    divisionnameHindi: { type: String, unique: true, required: true },
    divisionnameMarathi: { type: String, unique: true, required: true },
    statename: { type: String, required: true },
    divisionname: { type: String, required: true },
    districtname: { type: String, unique: true, required: true },
    districtnameHindi: { type: String, unique: true, required: true },
    districtnameMarathi: { type: String, unique: true, required: true },
})
