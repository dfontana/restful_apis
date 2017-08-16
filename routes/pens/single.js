const Pen = require('../../models/pen.js');

module.exports = (req, res) => {
    const penId = req.params.penId * 1;
    res.status(200).json({ message: "Return the pen with ID "+penId });
};
