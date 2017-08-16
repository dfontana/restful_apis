const make      = require('express').Router();
const all_makes = require('./all');
const single    = require('./single');
const pens      = require('./pens');

// Attach all routes that fall under '/makes' here!
make.get('/', all_makes);
make.get('/:makeName', single);

// Attach all sub-routes that fall under '/makes'
make.use('/:makeName/pens', pens);

module.exports = make;
