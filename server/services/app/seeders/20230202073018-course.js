"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data/course.json");
    data.forEach((el) => {
      delete el.id;
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Courses", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Courses", null, {});
  },
};
