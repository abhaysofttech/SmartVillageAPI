const express = require('express');
const router = express.Router();
const nagarpanchayatService = require('./nagarpanchayat.service');

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
    nagarpanchayatService.getAll()
        .then(nagarpanchayat => res.json(nagarpanchayat))
        .catch(err => next(err));
}
function getByStatename(req, res, next) {
    console.log("getByStatename");

    nagarpanchayatService.getByStatename(req.params.statename)
        .then(nagarpanchayat => nagarpanchayat ?
            res.json(nagarpanchayat) : res.sendStatus(404))
        .catch(err => next(err));
}

function register(req, res, next) {
    nagarpanchayatService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
module.exports = router;