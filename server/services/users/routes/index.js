const router = require("express").Router();

const studentRouter = require("./studentRoutes");

router.use("/students", studentRouter);

module.exports = router;
