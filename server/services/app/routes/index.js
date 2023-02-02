const express = require("express");
const CategoryController = require("../controllers/CategoryController");
const router = express.Router();
const course = require("./course");

router.get("/categories", CategoryController.getCategories);
router.use("/courses", course);

module.exports = router;
