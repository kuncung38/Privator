const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

//* Multer
const multer = require('multer');
const { storage } = require('../cloudinary/index');
const upload = multer({ storage });

router.post('/register', upload.single('image'), studentController.register);
router.post('/login', studentController.login);

module.exports = router;
