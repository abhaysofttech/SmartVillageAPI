const express = require('express');
const router = express.Router();
const grampanchayatService = require('./grampanchayat.service');

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
    grampanchayatService.getAll()
        .then(grampanchayat => res.json(grampanchayat))
        .catch(err => next(err));
}
function getByStatename(req, res, next) {
    console.log("getByStatename");

    grampanchayatService.getByStatename(req.params.statename)
        .then(grampanchayat => grampanchayat ?
            res.json(grampanchayat) : res.sendStatus(404))
        .catch(err => next(err));
}

function register(req, res, next) {
    grampanchayatService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
module.exports = router;