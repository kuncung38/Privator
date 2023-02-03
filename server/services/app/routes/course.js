const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/CourseController");

router.get("/", CourseController.getCourses);
router.get("/:id", CourseController.getCourseById);
router.post("/", CourseController.postCourse);

module.exports = router;
