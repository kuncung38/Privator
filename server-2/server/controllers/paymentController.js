const { Student, Course, Schedule, sequelize, Booking } = require("../models");
const midtransFunction = require("../helpers/midtransFunction");

const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

class PaymentController {
    static async getToken(req, res, next) {
        try {
            let user = await Student.findByPk(req.student.id);
            const course = await Course.findByPk(req.params.courseId);

            if (!course) {
                throw { name: "Course not found" };
            }

            let midtransToken = await midtransFunction(user, course.price);
            res.status(200).json(midtransToken);
        } catch (error) {
            next(error);
        }
    }

    static async createPayment(req, res, next) {
        const t = await sequelize.transaction();
        try {
            console.log(
                req.body,
                "ini req.body <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
            );

            let user = await Student.findByPk(req.student.id);

            const course = await Course.findByPk(req.params.courseId);

            const booking = await Booking.create(
                {
                    status: "Paid",
                    CourseId: course.id,
                    StudentId: req.student.id,
                    InstructorId: course.InstructorId,
                },
                { transaction: t, returning: true }
            );

            let inputSchedule = {
                StudentId: booking.StudentId,
                InstructorId: booking.InstructorId,
                CourseId: booking.CourseId,
                day: req.body.day,
                time: req.body.time,
            };

            const options = {
                from: process.env.EMAIL,
                to: "lala@yopmail.com",
                subject: "Booking confirmation",
                text: "Link",
            };
            transporter.sendMail(options, (err, info) => {
                if (err) {
                    throw { name: "NodemailerError" };
                }
            });

            await Schedule.create(inputSchedule, {
                transaction: t,
                returning: true,
            });
            await t.commit();

            res.status(200).json({ message: "Course has been paid" });
        } catch (error) {
            await t.rollback();
            next(error);
        }
    }
}
module.exports = PaymentController;
