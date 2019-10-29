const config = require('config.json');
const db = require('../../_helpers/db');
const Division = db.Division;


module.exports = {
    getAll,
    getByStatename,
    create
}

async function getAll() {
    return await Division.find().select('-hash');
}

async function getByStatename(statename) {
    //  return await User.findById(username).select('-hash');
    return await Division.find({ statename: statename });
  }

async function create(param){
    if (await Division.findOne({divisionname: param.divisionname})){
        throw '' + param.divisionname +' Division is already register'; 
    }
    const division = new Division(param);

    await division.save()
}
