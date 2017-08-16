const pens  = require('express').Router({ mergeParams: true });
const all   = require('./all');

pens.get('/', all);

module.exports = pens;
