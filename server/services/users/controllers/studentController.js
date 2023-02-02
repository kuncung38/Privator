const Student = require("../models/StudentModel");
const argon2 = require("argon2");

class StudentController {
    static async registerStudent(req, res, next) {
        try {
            const { email } = req.body;

            let userFound = await Student.findOne({
                $or: [{ email }, { username }],
            });
            if (userFound) {
                throw {
                    name: "email or username is already exists",
                };
            }
            await Student.create(req.body);
            res.status(201).json({ message: "New Student has been created" });
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
                    name: "Email and password are required",
                };
            }
            let userFound = await Student.findOne({ email });
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

    static async getAllStudents(req, res, next) {
        try {
            let data = await Student.find();
            let students = data.map((el) => {
                delete el.password;
                return password;
            });
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async getOneStudent(req, res, next) {
        try {
            let student = await Student.find({ _id });
            if (!student) {
                throw {
                    name: "Student not found",
                };
            }
            delete student.password;
            res.status(200).json(student);
        } catch (error) {
            next(error);
        }
    }

    static async editStudent(req, res, next) {
        try {
            const { _id } = req.params;
            let student = await Student.findByIdAndUpdate(_id, req.body, {
                new: true,
            });
            if (!student) {
                throw {
                    name: "Student not found",
                };
            }
            res.status(200).json({
                message: "Successfully edited the student",
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    }

    static async deleteStudent(req, res, next) {
        try {
            const { _id } = req.params;
            const response = await Student.deleteOne({ _id });
            if (!response.deletedCount) throw { name: "Student not found" };
            res.status(200).json({ message: "Succesfully deleted user" });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = StudentController;
