const express = require('express');
const router = express.Router();
const divisionService = require('./division.service');

//routes
var app = express();
router.get('/', getAll);
router.get('/:statename', getByStatename);
router.post('/register', register);
// router.get('/admin/:statename', function(request, response, next) {
//     var username = request.params.statename;
//     console.log( request.params);
//   }); 

function getAll(req, res, next) {
    divisionService.getAll()
        .then(divisions => res.json(divisions))
        .catch(err => next(err));
}
function getByStatename(req, res, next) {
    console.log("getByStatename");

    divisionService.getByStatename(req.params.statename)
        .then(divisions => divisions ? 
            res.json(divisions) : res.sendStatus(404))
        .catch(err => next(err));
}

function register(req, res, next){
    divisionService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
module.exports = router;