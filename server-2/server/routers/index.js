const express = require('express');
const router = express.Router();
const studentRouter = require('./studentRouter');
const instructorRouter = require('./instructorRouter');
const courseRouter = require('./courseRouter');
const bookingRouter = require('./bookingRouter');
const scheduleRouter = require('./scheduleRouter');

router.use('/student', studentRouter);
router.use('/instructor', instructorRouter);
router.use('/course', courseRouter);
router.use('/booking', bookingRouter);
router.use('/schedule', scheduleRouter);

module.exports = router;
