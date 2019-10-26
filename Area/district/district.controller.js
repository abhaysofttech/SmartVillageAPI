const express = require('express');
const router = express.Router();
const districtService = require('./district.service');

//routes
var app = express();
router.get('/', getAll);
//router.get('/:statename', getByStatename);
router.get('/:division', getByDivisionname);
router.post('/register', register);
// router.get('/admin/:statename', function(request, response, next) {
//     var username = request.params.statename;
//     console.log( request.params);
//   }); 

function getAll(req, res, next) {
    districtService.getAll()
        .then(districts => res.json(districts))
        .catch(err => next(err));
}
function getByDivisionname(req, res, next) {
    console.log("getByStatename");

    districtService.getByDivisionname(req.params.division)
        .then(districts => districts ?
            res.json(districts) : res.sendStatus(404))
        .catch(err => next(err));
}

function register(req, res, next) {
    districtService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
module.exports = router;