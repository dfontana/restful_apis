let mongoose    = require('mongoose');
let schema      = mongoose.Schema;

let pen_schema = new schema({
    make: String,
    model: String,
    purchased: Date
});

module.exports = mongoose.model('Pen', pen_schema);
