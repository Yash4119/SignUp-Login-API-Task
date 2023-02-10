const {createPool} = require("mysql");
require("dotenv").config({ path: ".env" });
const db = createPool({
    port: procces.env.MYSQL_DB_PORT,
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASS,
    database: process.env.MYSQL_DB_DATABASE,
    connectionLimit: 20
})

module.exports = db;