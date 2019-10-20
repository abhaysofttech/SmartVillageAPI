const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const SubComplainType = db.SubComplainType;

module.exports = {
    getAllComplainCategory,
    getById,
    getByComplainName,
    create,
    update,
    delete: _delete
};


async function getAllComplainCategory() {
    return await SubComplainType.find().select('-hash');
}

async function getById(id) {
    return await SubComplainType.findById(id).select('-hash');
}

async function getByComplainName(complainname) {
  return await SubComplainType.find({ complainname: complainname });
}


async function create(userParam) {
    // validate
    if (await SubComplainType.findOne({ subcomplainname: userParam.subcomplainname })) {
        throw 'Complain Name "' + userParam.subcomplainname + '" is already taken';
    }
  //  console.log(userParam);
    const subcomplainType = new SubComplainType(userParam);

    // save user
    await subcomplainType.save();
}

async function update(id, userParam) {
    const subcomplainType = await SubComplainType.findById(id);

    // validate
    if (!subcomplainType) throw 'Complain type found';
    if (subcomplainType.subcomplainname !== userParam.subcomplainname && await SubComplainType.findOne({ subcomplainname: userParam.subcomplainname })) {
        throw 'Complain Type "' + userParam.subcomplainname + '" is already taken';
    }


    // copy userParam properties to user
    Object.assign(subcomplainType, userParam);

    await complainType.save();
}

async function _delete(id) {
    await ComplainType.findByIdAndRemove(id);
}