const express = require('express');

const port = 3000;
const app = express();

app.use('/', (req, res, next) => {
    res.send('Main page');
})

app.listen(port);