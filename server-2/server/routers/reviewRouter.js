const express = require("express");
const router = express.Router();

const ReviewController = require("../controllers/reviewController");

const {
  authenticationInstructor,
  authenticationStudent,
} = require("../middlewares/authentication");

router.get("/", ReviewController.getReviews);
router.post("/", authenticationStudent, ReviewController.postReview);

module.exports = router;
