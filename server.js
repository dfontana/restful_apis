let express     = require('express');
let app         = express();
let bodyParser  = require('body-parser');

// Express -> Use body parser
app.use(bodyParser.urencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

// Register base route. All paths start with /api
let router = express.Router();
router.get('/', (req, res) => { 
    res.json({ message: 'Api Home.' });
});
app.use('/api', router);

// Start Server
app.listen(port);
console.log('Resting on port '+port);
