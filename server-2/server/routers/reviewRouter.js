const express = require("express");
const router = express.Router();

const ReviewController = require("../controllers/reviewController");

const {
  authenticationInstructor,
  authenticationStudent,
} = require("../middlewares/authentication");

router.get("/:id", ReviewController.getReviews);
router.post("/", ReviewController.postReview);
router.get("/instructor/:id", ReviewController.getInstructorReviews);

module.exports = router;
