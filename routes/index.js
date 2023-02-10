var router = require("express").Router();
var users = require("../controllers/users")
var auth = require("../controllers/auth")

// User route
router.use(users)

// Auth route
router.use(auth)



// Our homepage
router.get('/', function(req,res){
    res.send("Hello, Lets get Authenticated")
})

module.exports = router;
