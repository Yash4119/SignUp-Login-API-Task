const db = require("../../config/dbConnection");
const generateId = require("../../helpers/generateId")
const bcrypt = require('bcrypt')

exports.create = async (userData) => {
    try {
        userData.id = await generateId();
        userData.password = await bcrypt.hash(userData.password, 10)
        return await db.employee.create(userData)
    } catch (error) {
        console.log("error: ", error)
        return error;
    }
}

exports.checkByEmail = async (emailData) => {
    try {
        const isExist = await db.employee.findOne({ where: { email: emailData.email } });
        if (isExist) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log("error: ", error)
        return false
    }
};