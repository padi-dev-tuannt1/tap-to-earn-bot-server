var express = require("express");
var router = express.Router();

var earn = require("../controllers/pointController");

router.get("/getscore", earn.getscore);
router.post("/upscore", earn.upscore);

module.exports = router;