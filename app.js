const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const mongoService = require('./database/mongo');

dotenv.config();

const port = process.env.PORT_NUMBER || 3999;
const app = express();

app.use(bodyParser.json());

app.use('/', mongoService.savePurchase);

app.listen(port);
