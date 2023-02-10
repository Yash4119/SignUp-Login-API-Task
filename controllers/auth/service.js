const db = require("../../config/dbConnection");

// get user details from the database
exports.getUserByEmail = (email) => {
    return db.employee.findOne({where : {
        email:email
    }});
};