let router = require("express").Router();
let users = require("./routes");

router.use(users);

module.exports = router;