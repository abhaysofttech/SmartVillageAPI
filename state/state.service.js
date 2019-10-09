const config = require('config.json');
const db = require('_helpers/db');
const State = db.State;


module.exports = {
    getAll,
    create
}

async function getAll() {
    return await State.find().select('-hash');
}

async function create(param){
    if (await State.findOne({statename: param.statename})){
        throw 'StateName "' + param.statename +'" is already taken'; 
    }
    const state = new State(param);

    await state.save()
}
