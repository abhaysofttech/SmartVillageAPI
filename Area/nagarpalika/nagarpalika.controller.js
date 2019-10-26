const express = require('express');
const router = express.Router();
const nagarpalikaService = require('./nagarpalika.service');

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
    nagarpalikaService.getAll()
        .then(nagarpalika => res.json(nagarpalika))
        .catch(err => next(err));
}
function getByStatename(req, res, next) {
    console.log("getByStatename");

    nagarpalikaService.getByStatename(req.params.statename)
        .then(nagarpalika => nagarpalika ?
            res.json(nagarpalika) : res.sendStatus(404))
        .catch(err => next(err));
}

function register(req, res, next) {
    nagarpalikaService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
module.exports = router;