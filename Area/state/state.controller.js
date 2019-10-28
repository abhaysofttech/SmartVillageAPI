const express = require('express');
const router = express.Router();
const stateService = require('./state.service');

//routes
router.get('/', getAll);
router.post('/register', register);


function getAll(req, res, next) {
    stateService.getAll()
       // .then(states => res.json(states))
        .then(states => states ? 
            res.json(states) : 
            res.status(401).json({ message: 'UnAuthorize User' }))

        .catch(err => next(err));
}

function register(req, res, next){
    stateService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
module.exports = router;