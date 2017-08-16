let express = require('express');
let app = express();
let routes = require('./routes');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Connect to the database.
mongoose.connect('localhost:3001/mongo_database_string');

// Express -> Use body parser
app.use(bodyParser.urencoded({
    extended: true
}));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

// Register base route. All paths start with /api
app.use('/api', routes);

// Start Server
app.listen(port, () => {
    console.log('Resting on port ' + port);
});
