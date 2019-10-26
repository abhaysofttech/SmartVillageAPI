const config = require('../config.json');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true })
    .then(() => console.log("MongoDB Connection..."))
    .catch(err => console.log(err));
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/users.model'),
    State: require('../Area/state/state.model'),
    Division: require('../Area/division/division.model'),
    District: require('../Area/district/district.model'),
    Tehsils: require('../Area/district/district.model'),
    Mahanagarpalika: require('../Area/district/district.model'),
    Nagarpalika: require('../Area/district/district.model'),
    Nagarpanchayat: require('../Area/district/district.model'),
    Grampanchayat: require('../Area/district/district.model'),
    Ward: require('../Area/district/district.model'),
   // City: require('../city/city.model'),
    ComplainType: require('../complain/complain.model'),
    SubComplainType: require('../complain/sub-complain/sub-complain.model'),
};