let router = require("express").Router();
let users = require("./controller");

const { userRegisterSchema } = require("./request");

// cretae a new user
router.post(`/register`, userRegisterSchema, users.create);
router.post(`/check`, users.checkEmail);

module.exports = router;