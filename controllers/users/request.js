const {validateRequest} = require("../../helpers/validate-request");
const Joi = require("joi");

exports.userRegisterSchema = async(req,res,next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required().min(8),
        confirmPassword: Joi.string().min(6).max(20).required().valid(Joi.ref('password'))
    })
    validateRequest(req,res,next,schema);
}