const UserController = require("../controllers/userController");

const router = require("express").Router();

router.post("/register", UserController.registerStudent);
router.post("/login", UserController.loginStudent);
router.get("/", UserController.getAllStudents);


module.exports = router;
