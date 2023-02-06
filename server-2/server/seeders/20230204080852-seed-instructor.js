'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let data = require('../data/instructor.json');
    data.forEach(el => {
      el.password = bcrypt.hashSync(el.password, 10);
      el.createdAt = new Date();
      el.updatedAt = new Date();
      el.geometry = JSON.stringify(el.geometry);
    });

    await queryInterface.bulkInsert('Instructors', data);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Instructors', {}, {});
  },
};
