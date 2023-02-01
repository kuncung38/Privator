const router = require("express").Router();

const studentRouter = require("./studentRoutes");
const instructorRouter = require("./instructorRouter");

router.use("/students", studentRouter);
router.use("/instructors", instructorRouter);

module.exports = router;
