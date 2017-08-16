const Pen = require('../../../models/pen.js');

module.exports = (req, res) => {
    const makeName = req.params.makeName;
    res.status(200).json({ message: 'Return all Pens for make '+makeName });
};
