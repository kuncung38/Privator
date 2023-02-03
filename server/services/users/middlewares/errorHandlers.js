function errorHandler(err, req, res, next) {
    let status = 500;
    let message = "Internal Serrver Error";
    switch (err.name) {
        case "ValidationError":
            const keys = Object.keys(err.errors);
            const errors = keys.map((key) => {
                return err.errors[key].properties.message;
            });
            status = 400;
            message = errors[0];
            break;

        case "Email, username, and password are required":
        case "Email and password are required":
        case "SheduleList is required and must be an array that is not empty":
            status = 400;
            message = err.name;
            break;

        case "email or username is already exists":
        case "Invalid user or password":
            status = 401;
            message = err.name;
            break;
        case "Student not found":
        case "Instructor not found":
        case "Class not found":
            status = 404;
            message = err.name;
            break;
        case "CastError":
            status = 400;
            message = "Bad id format, data not found";
            break;
    }
    res.status(status).json({ message });
}

module.exports = errorHandler;
