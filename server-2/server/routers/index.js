const express = require('express');
const router = express.Router();
const studentRouter = require('./studentRouter');
const instructorRouter = require('./instructorRouter');
const courseRouter = require('./courseRouter');
const bookingRouter = require('./bookingRouter');
const scheduleRouter = require('./scheduleRouter');
const paymentRouter = require('./paymentRouter');
const reviewRouter = require('./reviewRouter');

router.use('/student', studentRouter);
router.use('/instructor', instructorRouter);
router.use('/course', courseRouter);
router.use('/booking', bookingRouter);
router.use('/schedule', scheduleRouter);
router.use('/payment', paymentRouter);
router.use('/review', reviewRouter);

module.exports = router;
