const express = require("express");
const router = express.Router();
const { HomePage } = require("../controllers/home");
const history = require("../controllers/historyController");
const user = require("../controllers/userController");
const exceptionHandling = require("./exceptionHandling");

/* GET home page. */
router.get("/", HomePage.getHomePage);

router.get("/api/v1/user/user", user.read);
router.get("/api/v1/user/add", user.create);
router.post("/api/v1/user/create", user.post);
router.get("/api/v1/user/edit/:id", user.edit);
router.post("/api/v1/user/update", user.update);
router.get("/api/v1/user/delete/:id", user.delete);

router.get("/api/v1/history/history", history.read);
router.get("/api/v1/history/add", history.create);
router.post("/api/v1/history/create", history.post);
router.get("/api/v1/history/edit/:id", history.edit);
router.post("/api/v1/history/update/", history.update);
router.get("/api/v1/history/delete/:id", history.delete);
router.post("/api/v1/history/leave/", history.leave);
router.post("/api/v1/history/arrive/:id", history.arrive);


// keep the exceptionHandling on the bottom of the index routes
router.use(exceptionHandling);

module.exports = router;