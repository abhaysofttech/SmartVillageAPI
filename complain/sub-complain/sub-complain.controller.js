const express = require('express');
const router = express.Router();
//call complain modal & Services
const subComplainService = require('./sub-complain.service');
const complainModel = require('./sub-complain.model');

//routes
router.get('/', getAllComplainCategory);
router.post('/register', register);


function getAllComplainCategory(req, res, next) {
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%");
    subComplainService.getAllComplainCategory()
        .then(complainTypes => res.json(complainTypes))
        .catch(err => console.log(err));
}

function register(req, res, next) {
    subComplainService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));

 
  
}

module.exports = router;