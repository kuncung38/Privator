module.exports = function errorHandler(err, req, res, next) {
  console.log(err);
  let statusCode = 500;
  let message = "Internal Server Error";

  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    statusCode = 400;
    message = err.errors[0].message;
  } else if (
    err.name === "Email is required" ||
    err.name === "Password is required" ||
    err.name === "Full Name is required" ||
    err.name === "Birth Date is required" ||
    err.name === "Location is required"
  ) {
    statusCode = 400;
    message = err.name;
  } else if (err.name === "Invalid email or password") {
    statusCode = 401;
    message = err.name;
  } else if (err.name === "JsonWebTokenError" || err.name === "Invalid token") {
    statusCode = 401;
    message = err.name;
  } else if (
    err.name === "Instructor not found" ||
    err.name === "Course not found"
  ) {
    statusCode = 404;
    message = err.name;
  } else if (err.name === "No Course in this Category") {
    statusCode = 404;
    message = err.name;
  } else if (err.name === "Booking not found") {
    statusCode = 404;
    message = err.name;
  } else if (err.name === "Already Paid") {
    statusCode = 400;
    message = err.name;
  } else if (err.name === "Please fill all the field") {
    statusCode = 400;
    message = "Please fill all the field";
  } else if (err.name === "Course is fully booked") {
    statusCode = 400;
    message = err.name;
  } else if (err.name === "Time is not available") {
    statusCode = 400;
    message = err.name;
  } else if (err.name === "Schedule not found") {
    statusCode = 404;
    message = err.name;
  } else if (err.name === "Score is missing") {
    statusCode = 400;
    message = err.name;
  } else if (err.name === "Forbidden") {
    statusCode = 403;
    message = err.name;
  }

  res.status(statusCode).json({ message });
};
