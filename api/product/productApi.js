var express = require('express');
var productRouter = express.Router();

productRouter.get('/', (req, res) => {
    res.send('Product working');
});

productRouter.get('/getDetails', (req, res) => {
    res.send('Get product details');
});

productRouter.get('/getDetailsById/:id', (req, res) => {
    res.send(`Get product By Id ${req.params.id}`);
});

module.exports = productRouter;