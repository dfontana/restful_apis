let mongoose    = require('mongoose');
let schema      = mongoose.Schema;

let make_schema = new schema({
    name: String,
    established: Date
});

module.exports = mongoose.model('Make', make_schema);
