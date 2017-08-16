const Pen = require('../../models/pen.js');

module.exports = (req, res) => {
    res.status(200).json({ message: "Return all pens from all makers." });
};
