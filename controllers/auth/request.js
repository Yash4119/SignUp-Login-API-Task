const Joi = require("joi")
const {validateRequest} = require("../../helpers/validate-request");

// Login request Validation
exports.loginSchema = (req,res,next) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    })
    validateRequest(req,res,next,schema);
}