const db = require("../../config/db");
const tblUsers = "employee";

// constructor
const Route = function (user) { };

// Create a New User
Route.create = (newUser, result) => {
    setTimeout(() => {
        db.query(`INSERT INTO ${tblUsers} SET ? `, newUser, (err, res) => {
            if (err) {
                result(err, null);
                return;
            }

            result(null, res);
        });
    }, 300);
};

module.exports = Route;