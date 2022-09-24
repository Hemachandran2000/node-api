var express = require('express');
var router = express.Router();

var categoryRouter = require('./api/category/categoryRouter');
var productRouter = require('./api/product/productApi');

router.use('/category', categoryRouter);
router.use('/product', productRouter);

router.use('*', (req, res) => {
    res.send('No router defined');
});

router.get('/', (req, res, next) => {
    next();
});

module.exports = router;