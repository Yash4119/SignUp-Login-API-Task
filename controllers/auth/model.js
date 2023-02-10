const db = require("../../config/db");
const tblUsers = "employee";
if(db){
    console.log("DB connected");
}
else{
    console.log("Failed to Connect DB");
}

module.exports = {
    getUserByEmail: (email, callback) => {
        db.query(
            `SELECT name,email,passowrd FROM  ` + tblUsers + ` WHERE email = ?`,[email],
            (err,results,fields) => {
                if(err) return callback(err);
                return callback(null,results[0]);
            }
        );
    },
}