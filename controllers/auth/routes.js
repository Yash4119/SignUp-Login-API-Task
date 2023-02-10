let router = require("express").Router();

 const {login} = require("./controller")
 const {loginSchema} = require("./request")
 
 router.get("/login",loginSchema,login);

 module.exports = router;