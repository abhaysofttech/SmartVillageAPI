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
    Tehsils: require('../Area/tehsils/tehsils.model'),
    Mahanagarpalika: require('../Area/mahanagarpalika/mahanagarpalika.model'),
    Nagarpalika: require('../Area/nagarpalika/nagarpalika.model'),
    Nagarpanchayat: require('../Area/nagarpanchayat/nagarpanchayat.model'),
    Grampanchayat: require('../Area/grampanchayat/grampanchayat.model'),
    Ward: require('../Area/ward/ward.model'),
   // City: require('../city/city.model'),
    ComplainType: require('../complain/complain.model'),
    SubComplainType: require('../complain/sub-complain/sub-complain.model'),
};