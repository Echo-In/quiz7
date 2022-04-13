const express = require("express");
const router = express.Router();
const { HomePage } = require("../controllers/home");
const exceptionHandling = require("./exceptionHandling");

/* GET home page. */
router.get("/", HomePage.getHomePage);

// keep the exceptionHandling on the bottom of the index routes
router.use(exceptionHandling);

module.exports = router;
