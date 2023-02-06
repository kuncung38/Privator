const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');

//* Multer
const multer = require('multer');
const { storage } = require('../cloudinary/index');
const upload = multer({ storage });

router.get('/', instructorController.getAllInstructors);
router.post('/register', upload.single('image'), instructorController.register);
router.post('/login', instructorController.login);
router.get('/:id', instructorController.getOneInstructor);

module.exports = router;
