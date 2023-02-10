const {Sequelize} = require("sequelize")
require("dotenv").config({ path: ".env" });

const userModel = require("../controllers/users/user.model");

const db = {}
initialize();

async function initialize(){
    // Create DB if dosen't exists
    const host = process.env.MYSQL_DB_HOST;
    const port = process.env.MYSQL_DB_PORT;
    const user = process.env.MYSQL_DB_USER;
    const password = process.env.MYSQL_DB_PASS;
    const database = process.env.MYSQL_DB_DATABASE;

    // Create connection with database

    var sequelize = new Sequelize(database, user, password, {
        host: host,
        port: port,
        maxConcurrentQueries: 100,
        dialect: "mysql",
        language: "en",
        logging: console.log,
        pool: {
            max: 2000,
            min: 0,
            acquire: 100000,
            idle: 10000,
        },
        timezone: "-04:00",
        dialectOptions: {
            multipleStatements: true,
            supportBigNumbers: true,
            bigNumberStrings: true,
            decimalNumbers: true,
            dateStrings: true,
            typeCast: true,
        },
    });

    db.sequelize = sequelize;

    // initialize models and add to the db Object

    db.employee = userModel(sequelize);

    sequelize
        .authenticate()
        .then(async (result) => {
            console.log("DB Connected Successfully to db name:"+ database);
        })
        .catch((err) => {
            console.log(`${err}`);;
        });
}
module.exports = db;