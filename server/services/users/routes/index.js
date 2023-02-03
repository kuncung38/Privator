const router = require("express").Router();

const studentRouter = require("./studentRoutes");
const instructorRouter = require("./instructorRouter");
const classroomRouter = require("./classroomRouter");

router.use("/students", studentRouter);
router.use("/instructors", instructorRouter);
router.use("/classrooms", classroomRouter);

module.exports = router;
