/**
 * Returns a single make, instead of all of the makes. 
 * We know which one to take by looking at the parameter passed in
 * the URL.
 */
const Make = require('../../models/make.js');

module.exports = (req, res) => {
    // Grab the make name from the URL.
    const makeName = req.params.makeName;
    res.status(200)json({ message: 'Return the make with name'+makeName });
};
