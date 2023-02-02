const Instructor = require("../models/InstructorModel");
const argon2 = require("argon2");

class InstructorController {
    static async register(req, res, next) {
        try {
            const { email } = req.body;

            let userFound = await Instructor.findOne({ email });
            if (userFound) {
                throw {
                    name: "email is already exists",
                };
            }
            await Instructor.create(req.body);
            res.status(201).json({
                message: "New Instructor has been created",
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                throw {
                    name: "Email and password are required",
                };
            }
            let userFound = await Instructor.findOne({ email });
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

    static async getAllInstructor(req, res, next) {
        try {
            const data = await Instructor.find();
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async getOneInstructor(req, res, next) {
        try {
            const { _id } = req.params;
            const instructor = await Instructor.findById(_id);
            res.status(200).json(instructor);
        } catch (error) {
            console.log(error.name);
            next(error);
        }
    }

    static async editInstructor(req, res, next) {
        try {
            const { _id } = req.params;
            let student = await Instructor.findByIdAndUpdate(_id, req.body, {
                new: true,
            });
            if (!student) {
                throw {
                    name: "Instructor not found",
                };
            }
            res.status(200).json({
                message: "Successfully edited the instructor",
            });
        } catch (error) {
            next(error);
        }
    }

    static async deleteInstructor(req, res, next) {
        try {
            const { _id } = req.params;
            const response = await Instructor.deleteOne({ _id });
            if (!response.deletedCount) throw { name: "Instructor not found" };
            res.status(200).json({ message: "Succesfully deleted instructor" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = InstructorController;