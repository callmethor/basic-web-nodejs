const { Router } = require("express");
var express = require("express");

var router = express.Router();

router.use("/admin", require(__dirname + "/admin"));
router.use("/blog", require(__dirname + "/blog"));

router.get("/", function(req, res){
    // res.json({"message":"this is home page"});
    res.render("test");
});

module.exports = router;