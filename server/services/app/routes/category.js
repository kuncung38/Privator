const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");
router.get("/:id", CategoryController.getCourseByCategories);
module.exports = router;
