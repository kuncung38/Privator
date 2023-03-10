"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Schedules", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            InstructorId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Instructors",
                    key: "id",
                },
            },
            CourseId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Courses",
                    key: "id",
                },
            },
            StudentId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Students",
                    key: "id",
                },
            },
            day: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            time: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Schedules");
    },
};
