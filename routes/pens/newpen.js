/**
 * Sample post where we create a new pen with the model and save
 */
const Pen = require('../../models/pen.js');

module.exports = (req, res) => {
    var pen = new Pen();
    pen.id = req.body.id;
    pen.purchased = req.body.purchased;
    pen.inkleft = req.body.inkleft;
    pen.inuse = req.body.inuse;
    
    pen.save((err) => {
        if(err) { res.send(err); }
        res.json({ message: 'Pen made.' });
    });
};
