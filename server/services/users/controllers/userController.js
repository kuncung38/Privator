const User = require("../models/userModel");
const colors = require("colors");
const argon2 = require("argon2");

class UserController {
    static async registerStudent(req, res, next) {
        try {
            const { email } = req.body;

            let userFound = await User.findOne({ email });
            if (userFound) {
                throw {
                    name: "email is already exists",
                };
            }
            req.body.role = "student";
            await User.create(req.body);
            res.status(201).json({ message: "New user has been created" });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async loginStudent(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                throw {
                    name: "Email, password and username are required",
                };
            }
            let userFound = await User.findOne({ email });
            if (!userFound || !userFound.matchPassword(password)) {
                throw {
                    name: "Invalid user or password",
                };
            }
            delete userFound.password;
            res.status(200).json("ok");
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;
