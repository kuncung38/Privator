function errorHandler(err, req, res, next) {
    let status = 500;
    let message = "Internal Serrver Error";

    switch (err.name) {
    }
    res.status(status).json(message);
}

module.exports = errorHandler;
