const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

const {
  authenticationInstructor,
  authenticationStudent,
} = require('../middlewares/authentication');

router.post('/', authenticationStudent, paymentController.createPayment);

module.exports = router;
