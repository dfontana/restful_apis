let mongoose    = require('mongoose');
let schema      = mongoose.Schema;

let pen_schema = new schema({
    id: Number,
    purchased: Date,
    inkleft: Number,
    inuse: Boolean
});

module.exports = mongoose.model('Pen', pen_schema);
