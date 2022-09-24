var express = require('express');
var router = require('./api-router');
var cookieParser = require('cookie-parser');
var jwt = require('jsonwebtoken');

var cors = require('cors');
var auth = require('./auth');
var app = express();

var PORT = '8080';

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/api/login', (req, res, next) => {
    let jwtSecretKey = 'No secret';
    let data = {
        time: Date(),
        userId: Math.round(10000),
    }

    const token = jwt.sign(data, jwtSecretKey);

    res.send(token);
});
app.use('/api', auth, router);

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
});
