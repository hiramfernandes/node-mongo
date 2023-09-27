const express = require('express');
const dotenv = require('dotenv');

const port = 3000;
const app = express();

dotenv.config();

app.use('/', (req, res, next) => {
    res.send('Main page');

    // Create new Purchase
    
});

app.listen(port);
