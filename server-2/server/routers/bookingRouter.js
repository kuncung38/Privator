const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

const {
  authenticationInstructor,
  authenticationStudent,
} = require('../middlewares/authentication');

router.get('/', authenticationStudent, bookingController.getAllBookings);
router.patch(
  '/payBooking/:id',
  authenticationStudent,
  bookingController.payBooking
);
router.post(
  '/:courseId',
  authenticationStudent,
  bookingController.createBooking
);
router.get('/:id', authenticationStudent, bookingController.getOneBooking);

module.exports = router;
