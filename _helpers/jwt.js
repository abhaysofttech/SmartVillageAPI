const expressJwt = require('express-jwt');
const config = require('../config.json');
const userService = require('../users/users.service');
//const hospitalService = require('../hospital/hospital.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
           '/api/users',
            '/users/register',
            //  '/hospital/hospitalregister',
            // '/state/stateregister',
            // '/state/',
            // '/city/cityregister',
            // '/city',
            // '/city/state/:statename',
            '/complain',
            '/complain/register',
            '/subcomplain/subcomplainname',
            '/subcomplain/register',
            '/tehsils'
            
        ]
    });
}

async function isRevoked(req, payload, done) {
    const users = await userService.getById(payload.sub);
    //   const hospital = await hospitalService.getById(payload.sub);
    // const city = await cityService.getCityByState(payload.sub);

    // revoke token if user no longer exists
    if (!users) {
        return done(null, true);
    }

    done();
};