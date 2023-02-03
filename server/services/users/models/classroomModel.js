const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
    ScheduleId: {
        type: Number,
        required: [true, "ClassroomId is required"],
    },
    studentList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
        },
    ],
});

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Classroom;
