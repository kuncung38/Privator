const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/CourseController");

const authentication = require("../middlewares/authenticationInstructor");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
cloudinary.config({
  cloud_name: "dscdxp9ms",
  api_key: "871598654258377",
  api_secret: "_zntLJv5bB1g5X0Sx12N4Su6WUs",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "privator",
  },
});
const upload = multer({ storage: storage });

router.get("/", CourseController.getCourses);
router.post(
  "/",
  authentication,
  upload.single("img"),
  CourseController.postCourse
);
router.get(
  "/instructor",
  authentication,
  CourseController.getCourseByInstructor
);
router.get("/:id", CourseController.getCourseById);
router.get("/byCategory/:id", CourseController.getCourseByCategories);
router.delete("/:id", authentication, CourseController.deleteCourses);
router.put(
  "/:id",
  authentication,
  upload.single("img"),
  CourseController.updateCourses
);

module.exports = router;
