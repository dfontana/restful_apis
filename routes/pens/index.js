const pens      = require('express').Router();
const all       = require('./all');
const single    = require('./single');
const newpen    = require('./newpen');

pens.get('/', all);
pens.get('/:penId', single);
pens.post('/new-pen', newpen);

module.exports = pens;
