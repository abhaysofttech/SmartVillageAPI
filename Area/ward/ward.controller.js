const express = require('express');
const router = express.Router();
const wardService = require('./ward.service');

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
    wardService.getAll()
        .then(ward => res.json(ward))
        .catch(err => next(err));
}
function getByStatename(req, res, next) {
    console.log("getByStatename");

    wardService.getByStatename(req.params.statename)
        .then(ward => ward ?
            res.json(ward) : res.sendStatus(404))
        .catch(err => next(err));
}

function register(req, res, next) {
    wardService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
module.exports = router;