const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
// const mongoService = require('./database/mongo');
const mongooseService = require('./database/mongoose');

// Log lack of port info on settings
if (!process.env.PORT_NUMBER)
    console.log('Fallback applied for port - not found on process.emv');

const port = process.env.PORT_NUMBER || 3000;
const app = express();

app.use(bodyParser.json());

// TODO: Review CORS setup to limit requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

// app.post('/', mongoService.savePurchase);
// app.get('/', mongoService.getPurchases);

app.post('/', mongooseService.createPurchase);
app.get('/', mongooseService.getPurchases);

app.listen(port);
