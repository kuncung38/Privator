const express = require("express");
const router = express.Router();

const ReviewController = require("../controllers/reviewController");
const { authenticationStudent } = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.get("/:id", ReviewController.getReviews);
router.post(
  "/:id",
  authenticationStudent,
  authorization,
  ReviewController.postReview
);
router.get("/instructor/:id", ReviewController.getInstructorReviews);

module.exports = router;
