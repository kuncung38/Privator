const CategoryController = require("../controllers/CategoryController");
const express = require("express");
const router = express.Router();
const course = require("./course");
const student = require("./student");
const instructor = require("./instructor");

router.get("/categories", CategoryController.getCategories);
router.use("/courses", course);
router.use("/students", student);
router.use("/instructors", instructor);


module.exports = router;
