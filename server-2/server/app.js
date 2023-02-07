if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// const {
//   Student,
//   Instructor,
//   Category,
//   Booking,
//   Course,
//   Schedule,
//   sequelize,
// } = require('./models');

// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const cors = require('cors');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const errorHandler = require('./middlewares/errorHandler');
const router = require('./routers/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/', router);

app.use(errorHandler);

// //* Mapbox
// const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
// const mapBoxToken = process.env.MAPBOX_TOKEN;
// const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

// //* Multer
// const multer = require('multer');
// const { storage } = require('./cloudinary/index');
// const upload = multer({ storage });

//! Student Authentification
// const authenticationStudent = async (req, res, next) => {
//   try {
//     const { access_token } = req.headers;

//     if (!access_token) throw { name: 'Invalid token' };

//     let payload = jwt.verify(access_token, process.env.JWT_SECRET);

//     let student = await Student.findByPk(payload.id);

//     req.student = { id: student.id };

//     if (!student) throw { name: 'Invalid token' };

//     next();
//   } catch (error) {
//     next(error);
//   }
// };

//!  Instructor Authentification
// const authenticationInstructor = async (req, res, next) => {
//   try {
//     const { access_token } = req.headers;

//     if (!access_token) throw { name: 'Invalid token' };

//     let { payload } = jwt.verify(access_token, process.env.JWT_SECRET);

//     console.log(payload.id);

//     let instructor = await Instructor.findByPk(payload.id);

//     req.instructor = { id: instructor.id };

//     if (!instructor) throw { name: 'Invalid token' };

//     next();
//   } catch (error) {
//     next(error);
//   }
// };

//!------------------------------------------------------------

//? Register Student
// app.post(
//   '/student/register',
//   upload.single('image'),
//   async (req, res, next) => {
//     try {
//       if (!req.body.email) throw { name: 'Email is required' };
//       if (!req.body.password) throw { name: 'Password is required' };
//       if (!req.body.fullName) throw { name: 'Full Name is required' };
//       if (!req.body.birthDate) throw { name: 'Birth Date is required' };
//       if (!req.body.location) throw { name: 'Location is required' };

//       const geoData = await geocoder
//         .forwardGeocode({
//           query: req.body.location,
//           limit: 1,
//         })
//         .send();

//       let input = {
//         email: req.body.email,
//         password: bcrypt.hashSync(req.body.password, 10),
//         fullName: req.body.fullName,
//         bio: req.body.bio,
//         role: 'student',
//         birthDate: req.body.birthDate,
//         phoneNumber: req.body.phoneNumber,
//         profilePicture: req.body.profilePicture,
//         location: req.body.location,
//         geometry: geoData.body.features[0].geometry,
//       };

//       const student = await Student.create(input);
//       res.status(201).json({ message: 'Success create a new student' });
//     } catch (error) {
//       next(error);
//     }
//   }
// );

//? Login Student
// app.post('/student/login', async (req, res, next) => {
//   try {
//     if (!req.body.email) throw { name: 'Email is required' };
//     if (!req.body.password) throw { name: 'Password is required' };

//     const student = await Student.findOne({
//       where: {
//         email: req.body.email,
//       },
//     });

//     if (!student) throw { name: 'Invalid email or password' };

//     const isPasswordValid = bcrypt.compareSync(
//       req.body.password,
//       student.password
//     );

//     if (!isPasswordValid) throw { name: 'Invalid email or password' };

//     const access_token = jwt.sign({ id: student.id }, process.env.JWT_SECRET);

//     res.status(200).json({
//       access_token,
//       location: student.geometry,
//       role: student.role,
//       email: student.email,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

//?-----------------------------------------------------------------------

//? Register Instructor
// app.post(
//   '/instructor/register',
//   upload.single('image'),
//   async (req, res, next) => {
//     try {
//       if (!req.body.email) throw { name: 'Email is required' };
//       if (!req.body.password) throw { name: 'Password is required' };
//       if (!req.body.fullName) throw { name: 'Full Name is required' };
//       if (!req.body.birthDate) throw { name: 'Birth Date is required' };
//       if (!req.body.location) throw { name: 'Location is required' };

//       const geoData = await geocoder
//         .forwardGeocode({
//           query: req.body.location,
//           limit: 1,
//         })
//         .send();

//       let input = {
//         email: req.body.email,
//         password: bcrypt.hashSync(req.body.password, 10),
//         fullName: req.body.fullName,
//         bio: req.body.bio,
//         role: 'instructor',
//         birthDate: req.body.birthDate,
//         phoneNumber: req.body.phoneNumber,
//         profilePicture: req.body.profilePicture,
//         location: req.body.location,
//         geometry: geoData.body.features[0].geometry,
//       };

//       const instructor = await Instructor.create(input);
//       res.status(201).json({ message: 'Success create a new instructor!' });
//     } catch (error) {
//       next(error);
//     }
//   }
// );

//? Login Instructor
// app.post('/instructor/login', async (req, res, next) => {
//   try {
//     if (!req.body.email) throw { name: 'Email is required' };
//     if (!req.body.password) throw { name: 'Password is required' };

//     const instructor = await Instructor.findOne({
//       where: {
//         email: req.body.email,
//       },
//     });

//     if (!instructor) throw { name: 'Invalid email or password' };

//     const isPasswordValid = bcrypt.compareSync(
//       req.body.password,
//       instructor.password
//     );

//     if (!isPasswordValid) throw { name: 'Invalid email or password' };

//     const access_token = jwt.sign(
//       { id: instructor.id },
//       process.env.JWT_SECRET
//     );

//     res.status(200).json({
//       access_token,
//       location: instructor.geometry,
//       role: instructor.role,
//       email: instructor.email,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

//? Get All Instructor
// app.get('/instructor', async (req, res, next) => {
//   try {
//     const instructors = await Instructor.findAll({
//       include: [
//         {
//           model: Course,
//           attributes: [
//             'name',
//             'detail',
//             'price',
//             'imgUrl',
//             'type',
//             'CategoryId',
//             'level',
//           ],
//         },
//       ],
//       attributes: [
//         'id',
//         'role',
//         'fullName',
//         'bio',
//         'profilePicture',
//         'location',
//         'phoneNumber',
//         'email',
//         'geometry',
//       ],
//     });
//     res.status(200).json(instructors);
//   } catch (error) {
//     next(error);
//   }
// });

//? Get Instructor By Id (for mentor page)
// app.get('/instructor/:id', authenticationInstructor, async (req, res, next) => {
//   try {
//     const instructor = await Instructor.findByPk(req.params.id, {
//       include: [
//         {
//           model: Course,
//           attributes: [
//             'name',
//             'detail',
//             'price',
//             'imgUrl',
//             'type',
//             'CategoryId',
//             'level',
//           ],
//           include: [
//             {
//               model: Category,
//               attributes: ['name'],
//             },
//           ],
//         },
//         {
//           model: Schedule,
//           attributes: ['time'],
//           include: [
//             {
//               model: Student,
//               attributes: ['fullName', 'location'],
//             },
//           ],
//         },
//       ],
//       attributes: [
//         'id',
//         'role',
//         'fullName',
//         'bio',
//         'profilePicture',
//         'location',
//         'phoneNumber',
//         'email',
//         'geometry',
//       ],
//     });

//     if (!instructor) throw { name: 'Instructor not found' };
//     res.status(200).json(instructor);
//   } catch (error) {
//     next(error);
//   }
// });

//!-----------------------------------------------------------------------------------

//? Get All Courses
// app.get('/course', async (req, res, next) => {
//   try {
//     const courses = await Course.findAll({
//       include: [
//         {
//           model: Instructor,
//           attributes: ['fullName', 'profilePicture', 'location'],
//         },
//         {
//           model: Category,
//           attributes: ['name'],
//         },
//       ],
//       attributes: [
//         'id',
//         'name',
//         'detail',
//         'price',
//         'imgUrl',
//         'type',
//         'CategoryId',
//         'level',
//       ],
//     });
//     res.status(200).json(courses);
//   } catch (error) {
//     next(error);
//   }
// });

//? Get Course By Id
// app.get('/course/:id', async (req, res, next) => {
//   try {
//     const course = await Course.findByPk(req.params.id, {
//       include: [
//         {
//           model: Category,
//           attributes: ['name'],
//         },
//         {
//           model: Instructor,
//           attributes: ['fullName', 'profilePicture', 'location'],
//         },
//       ],
//       attributes: [
//         'id',
//         'name',
//         'detail',
//         'price',
//         'imgUrl',
//         'type',
//         'CategoryId',
//         'level',
//       ],
//     });

//     if (!course) throw { name: 'Course not found' };
//     res.status(200).json(course);
//   } catch (error) {
//     next(error);
//   }
// });

//? Get all Category
// app.get('course/categories', async (req, res, next) => {
//   try {
//     const categories = await Category.findAll({
//       attributes: ['id', 'name'],
//     });
//     res.status(200).json(categories);
//   } catch (error) {
//     next(error);
//   }
// });

//? Get Course By Category
// app.get('/course/categories/:id', async (req, res, next) => {
//   try {
//     const courses = await Course.findAll({
//       where: {
//         CategoryId: req.params.id,
//       },
//       include: [
//         {
//           model: Instructor,
//           attributes: ['fullName', 'profilePicture', 'location'],
//         },
//         {
//           model: Category,
//           attributes: ['name'],
//         },
//       ],
//       attributes: [
//         'id',
//         'name',
//         'detail',
//         'price',
//         'imgUrl',
//         'type',
//         'CategoryId',
//         'level',
//       ],
//     });

//     if (courses.length === 0) throw { name: 'No Course in this Category' };
//     res.status(200).json(courses);
//   } catch (error) {
//     next(error);
//   }
// });

//? Add Course
// app.post('/course', authenticationInstructor, async (req, res, next) => {
//   try {
//     console.log(req.instructor);
//     const { name, detail, price, imgUrl, type, CategoryId, level } = req.body;

//     if (!name || !detail || !price || !type || !CategoryId || !level) {
//       throw { name: 'Please fill all the field' };
//     }

//     const course = await Course.create({
//       name,
//       detail,
//       price,
//       imgUrl,
//       type,
//       CategoryId,
//       level,
//       InstructorId: req.instructor.id,
//     });

//     res.status(201).json(course);
//   } catch (error) {
//     next(error);
//   }
// });

//!------------------------------------  Booking System     -----------------------------------------------------
//? Create booking
// app.post(
//   '/booking/:courseId',
//   authenticationStudent,
//   async (req, res, next) => {
//     try {
//       const CourseId = req.params.courseId;
//       let course = await Course.findByPk(CourseId);

//       if (!course) throw { name: 'Course not found' };

//       const booking = await Booking.create({
//         status: 'Booked',
//         CourseId,
//         StudentId: req.student.id,
//         InstructorId: course.InstructorId,
//       });

//       res.status(201).json(booking);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

//? Get All Booking
// app.get('/booking', authenticationStudent, async (req, res, next) => {
//   try {
//     const bookings = await Booking.findAll({
//       where: {
//         StudentId: req.student.id,
//       },
//       include: [
//         {
//           model: Course,
//           attributes: ['name'],
//         },
//         {
//           model: Instructor,
//           attributes: ['fullName'],
//         },
//       ],
//       attributes: ['id', 'status', 'CourseId', 'InstructorId', 'StudentId'],
//     });

//     res.status(200).json(bookings);
//   } catch (error) {
//     next(error);
//   }
// });

//? Pay Booking
// app.patch(
//   'booking/payBooking/:id',
//   authenticationStudent,
//   async (req, res, next) => {
//     const t = await sequelize.transaction();
//     try {
//       const booking = await Booking.findByPk(req.params.id);

//       const scheduleCheck = await Schedule.findAll({
//         where: {
//           InstructorId: booking.InstructorId,
//         },
//       });

//       if (scheduleCheck.length >= 5) throw { name: 'Course is fully booked' };

//       for (let schedule of scheduleCheck) {
//         if (req.body.time === schedule.time) {
//           throw { name: 'Time is not available' };
//         }
//       }

//       if (!booking) throw { name: 'Booking not found' };

//       if (booking.status === 'Paid') throw { name: 'Already Paid' };

//       await Booking.update(
//         {
//           status: 'Paid',
//         },
//         {
//           where: {
//             id: req.params.id,
//           },
//         },
//         { transaction: t, returning: true }
//       );

//       let inputSchedule = {
//         StudentId: booking.StudentId,
//         InstructorId: booking.InstructorId,
//         CourseId: booking.CourseId,
//         time: req.body.time,
//       };

//       await Schedule.create(inputSchedule, { transaction: t, returning: true });

//       await t.commit();
//       res.status(200).json(booking);
//     } catch (error) {
//       await t.rollback();
//       next(error);
//     }
//   }
// );

//!----------------------------------------------------------------------------------------

//!------------------------------------  Schedule System     -----------------------------------------------------
//? Get All Schedule
// app.get('/schedule', authenticationInstructor, async (req, res, next) => {
//   try {
//     const schedules = await Schedule.findAll({
//       where: {
//         InstructorId: req.instructor.id,
//       },
//       include: [
//         {
//           model: Student,
//           attributes: ['fullName', 'location'],
//         },
//       ],
//       attributes: ['id', 'time', 'InstructorId', 'StudentId'],
//     });

//     res.status(200).json(schedules);
//   } catch (error) {
//     next(error);
//   }
// });

//? Complete Schedule
// app.delete(
//   'schedule/completeSchedule/:id',
//   authenticationInstructor,
//   async (req, res, next) => {
//     const t = await sequelize.transaction();
//     try {
//       const schedule = await Schedule.findByPk(req.params.id);

//       if (!schedule) throw { name: 'Schedule not found' };

//       await Schedule.destroy(
//         {
//           where: { id: req.params.id },
//         },
//         { transaction: t, returning: true }
//       );

//       await Booking.update(
//         {
//           status: 'Completed',
//         },
//         {
//           where: {
//             StudentId: schedule.StudentId,
//             InstructorId: schedule.InstructorId,
//           },
//         },
//         { transaction: t, returning: true }
//       );

//       await t.commit();
//       res.status(200).json(schedule);
//     } catch (error) {
//       await t.rollback();
//       next(error);
//     }
//   }
// );

//!----------------------------------------------------------------------------------------

//! Error Handling
// app.use((err, req, res, next) => {
//   // console.log(err);
//   // let statusCode = 500;
//   // let message = 'Internal Server Error';
//   // if (
//   //   err.name === 'SequelizeValidationError' ||
//   //   err.name === 'SequelizeUniqueConstraintError'
//   // ) {
//   //   statusCode = 400;
//   //   message = err.errors[0].message;
//   // } else if (
//   //   err.name === 'Email is required' ||
//   //   err.name === 'Password is required' ||
//   //   err.name === 'Full Name is required' ||
//   //   err.name === 'Birth Date is required' ||
//   //   err.name === 'Location is required'
//   // ) {
//   //   statusCode = 400;
//   //   message = err.name;
//   // } else if (err.name === 'Invalid email or password') {
//   //   statusCode = 401;
//   //   message = err.name;
//   // } else if (err.name === 'JsonWebTokenError' || err.name === 'Invalid token') {
//   //   statusCode = 401;
//   //   message = err.name;
//   // } else if (
//   //   err.name === 'Instructor not found' ||
//   //   err.name === 'Course not found'
//   // ) {
//   //   statusCode = 404;
//   //   message = err.name;
//   // } else if (err.name === 'No Course in this Category') {
//   //   statusCode = 404;
//   //   message = err.name;
//   // } else if (err.name === 'Booking not found') {
//   //   statusCode = 404;
//   //   message = err.name;
//   // } else if (err.name === 'Already Paid') {
//   //   statusCode = 400;
//   //   message = err.name;
//   // } else if (err.name === 'Please fill all the field') {
//   //   statusCode = 400;
//   //   message = err.name;
//   // } else if (err.name === 'Course is fully booked') {
//   //   statusCode = 400;
//   //   message = err.name;
//   // } else if (err.name === 'Time is not available') {
//   //   statusCode = 400;
//   //   message = err.name;
//   // } else if (err.name === 'Schedule not found') {
//   //   statusCode = 404;
//   //   message = err.name;
//   // }
//   // res.status(statusCode).json({ message });
// });

app.listen(port, () => {
  console.log(`My app listening on http://localhost:${port}`);
});

module.exports = router;
