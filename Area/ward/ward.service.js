const config = require('config.json');
const db = require('../../_helpers/db');
const Ward = db.Ward;


module.exports = {
    getAll,
    getByStatename,
    create
}

async function getAll() {
    return await Ward.find().select('-hash');
}

async function getByStatename(statename) {
    //  return await User.findById(username).select('-hash');
    return await Ward.find({ statename: statename });
  }

async function create(param){
    if (await Ward.findOne({wardname: param.wardname})){
        throw 'Dehsilsname "' + param.wardname +'" is already taken'; 
    }
    const ward = new Ward(param);

    await ward.save()
}
