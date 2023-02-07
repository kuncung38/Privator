const express = require("express");
const router = express.Router();

const ReviewController = require("../controllers/reviewController");

router.get("/", ReviewController.getReviews);
router.post("/", ReviewController.postReview);

module.exports = router;
