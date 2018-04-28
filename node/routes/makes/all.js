/**
 * Accessed when user looks at /api/make/
 * Would return all the makes, or something of the likes!
 */
const Make = require('../../models/make.js');

module.exports = (req, res) => {
    res.status(200).json({ message: 'Do Something!' });
};
