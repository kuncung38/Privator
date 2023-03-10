const { Student, Course, Schedule, sequelize, Booking } = require("../models");
const midtransFunction = require("../helpers/midtransFunction");

const origin = "http://localhost:5174";

const nodemailer = require("nodemailer");

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
            // if (user.isSubscribed === true) {
            //   throw { name: 'already_subscribed' };
            // }
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

            let testAccount = await nodemailer.createTestAccount();
            // let transporter = nodemailer.createTransport({
            //     service: "outlook",
            //     auth: {
            //         user: process.env.EMAIL,
            //         pass: process.env.EMAIL_PASS,
            //     },
            // });
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: testAccount.user, // generated ethereal user
                    pass: testAccount.pass, // generated ethereal password
                },
            });

            const options = {
                from: process.env.EMAIL,
                to: user.email,
                subject: "Booking confirmation",
                text: `Hi, ${user.fullName} your booking has been confirmed. Please check your schedule in your dashboard. Thank you for choosing us!`,
            };

            const optionsOnline = {
                from: process.env.EMAIL,
                to: user.email,
                subject: "Booking confirmation",
                html: `Hi ${user.fullName}, your booking has been confirmed. Here's your room link: <a href=${req.body.link}>CLICK HERE</a>. Please check your schedule in your dashboard. Thank you for choosing us!`,
            };

            if (course.type === "Online") {
                transporter.sendMail(optionsOnline, (err, info) => {
                    if (err) {
                        throw { name: "NodemailerError" };
                    }
                });
            } else {
                transporter.sendMail(options, (err, info) => {
                    if (err) {
                        throw { name: "NodemailerError" };
                    }
                });
            }

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
