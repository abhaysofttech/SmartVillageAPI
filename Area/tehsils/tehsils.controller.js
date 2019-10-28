const express = require('express');
const router = express.Router();
const tehsilService = require('./tehsils.service');

//routes
var app = express();
router.get('/', getAll);
router.get('/:districtname', getByDistrictname);
router.post('/register', register);
// router.get('/admin/:statename', function(request, response, next) {
//     var username = request.params.statename;
//     console.log( request.params);
//   }); 

function getAll(req, res, next) {
    tehsilService.getAll()
        .then(tehsils => res.json(tehsils))
        .catch(err => next(err));
}
function getByStatename(req, res, next) {
    console.log("getByStatename");

    tehsilService.getByStatename(req.params.statename)
        .then(tehsils => tehsils ?
            res.json(tehsils) : res.sendStatus(404))
        .catch(err => next(err));
}

function getByDistrictname(req, res, next) {

    tehsilService.getByDistrictname(req.params.districtname)
        .then(tehsils => tehsils ?
            res.json(tehsils) : res.sendStatus(404))
        .catch(err => next(err));
}
function register(req, res, next) {
    tehsilService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
module.exports = router;