const StudentController = require("../controllers/studentController");

const router = require("express").Router();

router.post("/register", StudentController.registerStudent);
router.post("/login", StudentController.loginStudent);
router.get("/", StudentController.getAllStudents);
router.get("/:_id", StudentController.getOneStudent);
router.put("/:_id", StudentController.editStudent);
router.delete("/:_id", StudentController.deleteStudent);

module.exports = router;
