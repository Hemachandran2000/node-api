var sql = require("mssql");
var config = require('./dbConfig');

var pool = null;

async function createConnection() {
    pool = await sql.connect(config);
    return pool.request();
}

function closeConnection() {
    pool.close();
    sql.close();
}

module.exports = {
    createConnection,
    closeConnection
}