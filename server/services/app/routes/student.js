const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const authentication = require("../middlewares/authentication");

router.post("/login", UserController.loginStudent);


module.exports = router;
