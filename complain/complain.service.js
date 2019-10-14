const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const ComplainType = db.ComplainType;

module.exports = {
    getAllComplainCategory,
    getById,
    getByComplainName,
    create,
    update,
    delete: _delete
};


async function getAllComplainCategory() {
    console.log("Check ***************")
    return await ComplainType.find().select('-hash');
}

async function getById(id) {
    return await ComplainType.findById(id).select('-hash');
}

async function getByComplainName(complainname) {
  return await ComplainType.findOne({ complainname: complainname });
}


async function create(userParam) {
    // validate
    if (await ComplainType.findOne({ complainname: userParam.complainname })) {
        throw 'Complain Name "' + userParam.complainname + '" is already taken';
    }
  //  console.log(userParam);
    const complainType = new ComplainType(userParam);

    // save user
    await complainType.save();
}

async function update(id, userParam) {
    const complainType = await ComplainType.findById(id);

    // validate
    if (!complainType) throw 'Complain type found';
    if (complainType.complainname !== userParam.complainname && await ComplainType.findOne({ complainname: userParam.complainname })) {
        throw 'Complain Type "' + userParam.complainname + '" is already taken';
    }


    // copy userParam properties to user
    Object.assign(complainType, userParam);

    await complainType.save();
}

async function _delete(id) {
    await ComplainType.findByIdAndRemove(id);
}