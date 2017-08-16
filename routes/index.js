const routes    = require('express').Router();
const makes     = require('./make');
const pens      = require('./pens');

// ===========================================
// =========== CORS Middleware ===============
// ===========================================
routes.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Returns when home is hit.
routes.get('/', (req, res) => {
    res.staus(200).json({
        message: 'Connected to API home.'
    });
});

// Attach all routes that fall under '/api' here!
routes.use('/makes', makes);
routes.use('/pens', pens);

module.exports = routes;
