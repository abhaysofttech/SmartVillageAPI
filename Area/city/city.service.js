const config = require('config.json');
const db = require('_helpers/db');
const City = db.City;

module.exports = {
    getAll,
    create
}

async function getAll(){
    debugger;
    return await City.find().select('-hash');
}
async function create(param) {
    // validate
    if (await City.findOne({ statename:param.statename},{cityname: param.cityname })) {
        throw 'Cityname "' + param.cityname + '" is already taken for ' +param.statename;
    }

    const city = new City(param);

    // save user
    await city.save();
}