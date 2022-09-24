var express = require('express');
var categoryRouter = express.Router();

var categoryApi = require('./categoryApi');

categoryRouter.get('/', categoryApi.getAll);

categoryRouter.get('/addCategory', categoryApi.create);

categoryRouter.get('/updateCategory', categoryApi.update);

categoryRouter.get('/deleteCategoryById', categoryApi.remove);

categoryRouter.get('/getCategoryById', categoryApi.getById);

categoryRouter.get('/getAllCategory', categoryApi.getAll);

categoryRouter.get('/getAllCategoryByPageNo', categoryApi.getByPageNo);

module.exports = categoryRouter;