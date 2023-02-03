function handleError(err, req, res, next) {
  let statusCode = 500;
  let message = "Internal server error";
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    statusCode = 400;
    message = err.errors[0].message;
  } else if (err.name === "MissingEmailInput") {
    statusCode = 400;
    message = "Please enter your email";
  } else if (err.name === "MissingPasswordInput") {
    statusCode = 400;
    message = "Please enter your password";
  } else if (err.name === "InvalidCredentials") {
    statusCode = 401;
    message = "Incorrect email or password";
  } else if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token";
  } else if (err.name === "InvalidAccess") {
    statusCode = 401;
    message = "You don't have access";
  } else if (err.name === "Forbidden") {
    statusCode = 403;
    message = "Access denied";
  } else if (err.name === "NotFound") {
    statusCode = 404;
    message = "Not found";
  }
  res.status(statusCode).json({ message });
}

module.exports = handleError;
