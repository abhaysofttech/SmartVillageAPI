const config = require('config.json');
const db = require('_helpers/db');
const Mahanagarpalika = db.Mahanagarpalika;


module.exports = {
    getAll,
    getByStatename,
    create
}

async function getAll() {
    return await Mahanagarpalika.find().select('-hash');
}

async function getByStatename(statename) {
    //  return await User.findById(username).select('-hash');
    return await Mahanagarpalika.find({ statename: statename });
  }

async function create(param){
    if (await Mahanagarpalika.findOne({mahanagarpalikaname: param.mahanagarpalikaname})){
        throw 'Mahanagarpalikaname "' + param.mahanagarpalikaname +'" is already taken'; 
    }
    const mahanagarpalika = new Mahanagarpalika(param);

    await mahanagarpalika.save()
}
