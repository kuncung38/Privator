const InstructorController = require("../controllers/instructorController");

const router = require("express").Router();

router.post("/register", InstructorController.register);
router.post("/login", InstructorController.login);
router.get("/", InstructorController.getAllInstructor);
router.get("/:_id", InstructorController.getOneInstructor);
router.put("/:_id", InstructorController.editInstructor);
router.delete("/:_id", InstructorController.editInstructor);

module.exports = router;
