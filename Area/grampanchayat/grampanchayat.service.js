const config = require('config.json');
const db = require('../../_helpers/db');
const Grampanchayat = db.Grampanchayat;


module.exports = {
    getAll,
    getByStatename,
    create
}

async function getAll() {
    return await Grampanchayat.find().select('-hash');
}

async function getByStatename(statename) {
    //  return await User.findById(username).select('-hash');
    return await Grampanchayat.find({ statename: statename });
  }

async function create(param){
    if (await Grampanchayat.findOne({grampanchayatname: param.grampanchayatname})){
        throw 'Dehsilsname "' + param.grampanchayatname +'" is already taken'; 
    }
    const grampanchayat = new Grampanchayat(param);

    await grampanchayat.save()
}
