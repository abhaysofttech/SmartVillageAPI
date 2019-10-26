const express = require('express');
const router = express.Router();
const cityService = require('./city.service');

//routes
router.get('/', getAll);
router.post('/cityregister', register);

function getAll(req, res, next) {
    cityService.getAll()
        .then(cities => res.json(cities))
        .catch(err => next(err));
    // console.log(__dirname);
    // res.sendFile(__dirname+"/city.html")
}


function register(req, res, next) {
    cityService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
module.exports = router;