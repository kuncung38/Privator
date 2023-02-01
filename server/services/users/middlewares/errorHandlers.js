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

        case "Email, password and username are required":
            status = 400;
            message = "Email, password and username are required";
            break;

        case "email is already exists":
        case "Invalid user or password":
            status = 401;
            message = err.name;
    }
    res.status(status).json({ message });
}

module.exports = errorHandler;
