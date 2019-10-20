const express = require('express');
const router = express.Router();
//call complain modal & Services
const subComplainService = require('./sub-complain.service');
const complainModel = require('./sub-complain.model');

//routes
router.get('/', getAllComplainCategory);
router.post('/register', register);
router.get('/subcomplainname', getByComplainName);


function getAllComplainCategory(req, res, next) {
    subComplainService.getAllComplainCategory()
        .then(complainTypes => res.json(complainTypes))
        .catch(err => console.log(err));
}

function register(req, res, next) {
    subComplainService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}
function getByComplainName(req, res, next) {
    subComplainService.getByComplainName(req.query.complainTypes)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

module.exports = router;