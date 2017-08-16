const express       = require('express');
const app           = express();
const routes        = require('./routes');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');

// Connect to the database.
mongoose.connect('localhost:3001/mongo_database_string');

// Express -> Use body parser
app.use(bodyParser.urencoded({
    extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// API starts at '/api' 
app.use('/api', routes);

// Start Server
app.listen(port, () => {
    console.log('Resting on port ' + port);
});
