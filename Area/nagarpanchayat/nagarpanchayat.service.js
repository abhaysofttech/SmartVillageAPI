const config = require('config.json');
const db = require('_helpers/db');
const Nagarpanchayat = db.Nagarpanchayat;


module.exports = {
    getAll,
    getByStatename,
    create
}

async function getAll() {
    return await Nagarpanchayat.find().select('-hash');
}

async function getByStatename(statename) {
    //  return await User.findById(username).select('-hash');
    return await Nagarpanchayat.find({ statename: statename });
  }

async function create(param){
    if (await Nagarpanchayat.findOne({nagarpanchayatname: param.nagarpanchayatname})){
        throw '' + param.nagarpanchayatname +' Nagarpanchayat is already register'; 
    }
    const nagarpanchayat = new Nagarpanchayat(param);

    await nagarpanchayat.save()
}
