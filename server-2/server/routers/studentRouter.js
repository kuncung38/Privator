const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

const { authenticationStudent } = require("../middlewares/authentication");

//* Multer
const multer = require("multer");
const { storage } = require("../cloudinary/index");
const upload = multer({ storage });

router.post("/register", upload.single("image"), studentController.register);
router.post("/login", studentController.login);

router.get("/profile", authenticationStudent, studentController.getOneStudent);

module.exports = router;
