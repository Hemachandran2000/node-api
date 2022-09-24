const sqlConfig = {
    user: 'sa',
    password: 'admin',
    server: 'localhost\\SQLEXPRESS',
    database: 'OnlineStore',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false
    }
}

module.exports = sqlConfig;