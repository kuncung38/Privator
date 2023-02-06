const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

const { authenticationInstructor } = require('../middlewares/authentication');

router.get('/', authenticationInstructor, scheduleController.getAllSchedules);
router.delete(
  '/completeSchedule/:id',
  authenticationInstructor,
  scheduleController.completeSchedule
);

module.exports = router;
