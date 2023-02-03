const Classroom = require("../models/classroomModel");

class ClassroomController {
    static async create(req, res, next) {
        try {
            const { ScheduleId, studentList } = req.body;
            if (!ScheduleId || (!Array.isArray(studentList) && studentList)) {
                throw {
                    name: "ScheduleId is required, studentList must be an array",
                };
            }
            const data = await Classroom.create({ ScheduleId, studentList });
            res.status(201).json({ message: "New classroom has been created" });
        } catch (error) {
            next(error);
        }
    }

    static async getClassrooms(req, res, next) {
        try {
            const data = await Classroom.find().populate(
                "studentList",
                "-password"
            );
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async getClassroomBySchedule(req, res, next) {
        try {
            const { ScheduleId } = req.params;
            const data = await Classroom.find({ ScheduleId });
            if (!data) throw { name: "Class not found" };

            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async getClassroomByListOfSchedules(req, res, next) {
        try {
            const { scheduleList } = req.body;

            if (
                !scheduleList ||
                !Array.isArray(scheduleList) ||
                !scheduleList.length
            ) {
                throw {
                    name: "SheduleList is required and must be an array that is not empty",
                };
            }
            console.log(scheduleList);
            const data = await Classroom.find({
                scheduleId: { $elemMatch: { $or: scheduleList } },
            });

            res.send(200).json(data);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = ClassroomController;
