const userService = require("./service");
// const response = require("../../helpers/response");


exports.create = async (req, res) => {
    try {
        if (req.body.password !== req.body.confirmPassword) {
            return res.status(422).send({
                message: 'Passwords do not match!'
            })
        }

        const isEmailExist = await userService.checkByEmail(req.body);
        if (isEmailExist) {
            return res.status(422).send({
                message: 'Email already exists'
            })
        }
        
        const response = await userService.create(req.body);
        if (response) {
            console.log("Here :", response)
            res.send(response);
        } else {
            res.send(response);
        }

    } catch (error) {
        console.log("error: ", error);
    }
};

exports.checkEmail = async (req, res) => {
    try {
        const response = await userService.checkByEmail(req.body);
        if (response) {
            console.log("Here :", response)
            res.send(response);
        } else {
            res.send(response);
        }
    } catch (error) {
        console.log("error: ", error);
    }
};