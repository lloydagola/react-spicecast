"use strict";
var express = require("express");
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res) {
    console.log({ req });
    res.status(200).send("hello");
});
module.exports = router;
