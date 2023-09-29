const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const mongoService = require('./database/mongo');

const port = process.env.PORT_NUMBER || 3999;
const app = express();

app.use(bodyParser.json());

app.post('/', mongoService.savePurchase);
app.get('/', mongoService.getPurchases);

app.listen(port);
