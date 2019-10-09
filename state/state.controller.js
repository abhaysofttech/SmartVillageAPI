const express = require('express');
const router = express.Router();
const stateService = require('./state.service');

//routes
router.get('/', getAll);
router.post('/stateregister', register);


function getAll(req, res, next) {
    stateService.getAll()
        .then(states => res.json(states))
        .catch(err => next(err));
}

function register(req, res, next){
    debugger
    stateService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
module.exports = router;