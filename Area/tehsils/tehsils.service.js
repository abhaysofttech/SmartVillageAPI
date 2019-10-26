const config = require('config.json');
const db = require('../../_helpers/db');
const Tehsils = db.Tehsils;


module.exports = {
    getAll,
    getByStatename,
    create
}

async function getAll() {
    return await Tehsils.find().select('-hash');
}

async function getByStatename(statename) {
    //  return await User.findById(username).select('-hash');
    return await Tehsils.find({ statename: statename });
  }

async function create(param){
    if (await Tehsils.findOne({tehsilsname: param.tehsilsname})){
        throw 'Dehsilsname "' + param.tehsilsname +'" is already taken'; 
    }
    const tehsils = new Tehsils(param);

    await tehsils.save()
}
