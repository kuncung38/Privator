const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/CourseController");

const authentication = require("../middlewares/authenticationInstructor");

router.get("/", CourseController.getCourses);
router.post("/", authentication, CourseController.postCourse);
router.get("/:id", CourseController.getCourseById);

module.exports = router;
