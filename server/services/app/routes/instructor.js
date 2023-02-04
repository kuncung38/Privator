const express = require("express");
const router = express.Router();
const InstructorController = require("../controllers/InstructorController");

router.post('/login', InstructorController.login)
router.post
module.exports = router;
