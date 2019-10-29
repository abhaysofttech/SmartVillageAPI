const config = require('config.json');
const db = require('_helpers/db');
const District = db.District;


module.exports = {
    getAll,
    getByStatename,
    getByDivisionname,
    create
}

async function getAll() {
    return await District.find().select('-hash');
}

async function getByStatename(statename) {
    //  return await User.findById(username).select('-hash');
    return await District.find({ statename: statename });
  }
  async function getByDivisionname(divisionname) {
    //  return await User.findById(username).select('-hash');
    return await District.find({ divisionname: divisionname });
  }

async function create(param){
    if (await District.findOne({districtname: param.districtname})){
        throw '' + param.districtname +' District is already register'; 
    }
    const district = new District(param);

    await district.save()
}
