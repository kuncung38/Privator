const router = require("express").Router();

const ClassroomController = require("../controllers/classroomController");

router.post("/", ClassroomController.create);
router.get("/", ClassroomController.getClassrooms);
router.get("/schedule", ClassroomController.getClassroomBySchedule);
router.get("/schedulesList", ClassroomController.getClassroomByListOfSchedules);

module.exports = router;
