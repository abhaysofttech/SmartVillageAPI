const config = require('config.json');
const db = require('_helpers/db');
const Nagarpalika = db.Nagarpalika;


module.exports = {
    getAll,
    getByStatename,
    create
}

async function getAll() {
    return await Nagarpalika.find().select('-hash');
}

async function getByStatename(statename) {
    //  return await User.findById(username).select('-hash');
    return await Nagarpalika.find({ statename: statename });
  }

async function create(param){
    if (await Nagarpalika.findOne({nagarpalikaname: param.nagarpalikaname})){
        throw '' + param.nagarpalikaname +' Nagarpalika is already register'; 
    }
    const nagarpalika = new Nagarpalika(param);

    await nagarpalika.save()
}
