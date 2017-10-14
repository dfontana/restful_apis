const express       = require('express');
const app           = express();
const routes        = require('./routes');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');

// Connect to the database.
mongoose.connect('mongodb://localhost:27017/test', {
    useMongoClient: true
});

// Express -> Use body parser
app.use(bodyParser.urlencoded({
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
