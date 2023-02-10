var express = require('express');
const app = express();
// const bodyParser = require("body-parser");
require("dotenv").config({ path: __dirname + "/.env" });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(require("./routes"));

app.listen(process.env.PORT, ()=>{
    console.log("Connected!!!" + " => " + process.env.HOST)
});

