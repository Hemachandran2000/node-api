var sql = require('../../dbConnection');

const categoryApi = () => { };

categoryApi.create = async () => {

    try {
        let con = await sql.createConnection();
        let data = await con.input('CategoryName', req.body.name).
            input('CategoryDesc', req.body.desc).execute('AddCategory');

        sql.closeConnection();
        res.status(200).send(data.recordset[0].ID);
    } catch (err) {
        res.status(500).send('error');
    }
};

categoryApi.update = async (req, res) => {

    try {
        let con = await sql.createConnection();
        let data = await con.input('CategoryId', req.body.id).
            input('CategoryName', req.body.name).
            input('CategoryDesc', req.body.desc).execute('UpdateCategory');

        sql.closeConnection();
        res.status(200).send(data.recordset[0].ID);
    } catch (err) {
        res.status(500).send('error');
    }
};

categoryApi.remove = async (req, res) => {

    try {
        let con = await sql.createConnection();
        let data = await con.input('CategoryId', req.body.id).execute('DeleteCategory');

        sql.closeConnection();
        res.status(200).send(data.recordset[0].ID);
    } catch (err) {
        res.status(500).send('error');
    }
};

categoryApi.getById = async (req, res) => {

    try {
        let con = await sql.createConnection();
        let data = await con.input('CategoryId', req.body.id).execute('GetCategoryById');

        sql.closeConnection();
        res.status(200).send(data.recordset);
    } catch (err) {
        res.status(500).send('error');
    }
};

categoryApi.getAll = async (req, res) => {

    try {
        let con = await sql.createConnection();
        let data = await con.execute('GetAllCategory');

        sql.closeConnection();
        res.status(200).send(data.recordset);
    } catch (err) {
        res.status(500).send('error');
    }
};

categoryApi.getByPageNo = async (req, res) => {

    try {
        let con = await sql.createConnection();
        let data = await con.input('PageNumber', parseInt(req.body.pageNo)).
            input('PageSize', parseInt(req.body.pageSize)).
            input('Sort', req.body.pageSort).
            output('TotalRecords').
            execute('GetCategoryPagination');

        sql.closeConnection();
        res.status(200).send({
            result: data.recordset,
            count: data.output.TotalRecords
        });
    } catch (err) {
        res.status(500).send('error');
    }
};

module.exports = categoryApi;