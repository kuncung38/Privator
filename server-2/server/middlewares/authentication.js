const { decodeToken } = require('../helpers/jwt');
const { Student, Instructor } = require('../models');

//? Student Authentication
const authenticationStudent = async (req, res, next) => {
  try {
    let { access_token } = req.headers;
    if (!access_token) throw { name: 'Invalid token' };

    let payload = decodeToken(access_token);

    let student = await Student.findByPk(payload.id);

    if (!student) throw { name: 'Invalid token' };

    req.student = { id: student.id };
    next();
  } catch (error) {
    next(error);
  }
};

//? Instructor Authentication
const authenticationInstructor = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) throw { name: 'Invalid token' };

    let payload = decodeToken(access_token);

    let instructor = await Instructor.findByPk(payload.id);

    if (!instructor) throw { name: 'Invalid token' };

    req.instructor = { id: instructor.id };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authenticationStudent, authenticationInstructor };
