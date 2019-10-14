require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser= require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const passport = require('passport');
const options = {
    origin: true,
  "Access-Control-Allow-Credentials": true,

  "Access-Control-Allow-Origin": true,
  "Access-Control-Allow-Headers": true,
  "Access-Control-Expose-Headers": true
  };
app.use(cors(options));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// use JWT auth to secure the api
app.use(jwt());
app.use(passport.initialize());

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/state', require('./state/state.controller'));
app.use('/city', require('./city/city.controller'));
app.use('/complain', require('./complain/complain.controller'));
app.use('/subcomplain', require('./complain/sub-complain/sub-complain.controller'));

// global error handler
app.use(errorHandler);


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
  
 // console.log(process.env);
    console.log('Server listening on port ' + port);
});