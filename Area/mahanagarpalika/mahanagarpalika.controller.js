const express = require('express');
const router = express.Router();
const mahanagarpalikaService = require('./mahanagarpalika.service');

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
    mahanagarpalikaService.getAll()
        .then(mahanagarpalika => res.json(mahanagarpalika))
        .catch(err => next(err));
}
function getByStatename(req, res, next) {
    console.log("getByStatename");

    mahanagarpalikaService.getByStatename(req.params.statename)
        .then(mahanagarpalika => mahanagarpalika ?
            res.json(mahanagarpalika) : res.sendStatus(404))
        .catch(err => next(err));
}

function register(req, res, next) {
    mahanagarpalikaService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
module.exports = router;