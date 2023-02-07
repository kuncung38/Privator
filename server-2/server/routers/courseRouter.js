const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const {
  authenticationInstructor,
  authenticationStudent,
} = require("../middlewares/authentication");

const multer = require("multer");
const { storage } = require("../cloudinary/index");
const upload = multer({ storage });

router.get("/", courseController.getAllCourses);
router.post(
  "/",
  authenticationInstructor,
  upload.single("imgUrl"),
  courseController.createCourse
);
router.get("/categories", courseController.getAllCategories);
router.get("/:id", courseController.getOneCourse);
router.get("/categories/:id", courseController.getOneCategory);

module.exports = router;
