"use strict";

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

    await queryInterface.bulkInsert("Category", [
      {
        name: "TI dan Perangkat Lunak",
        icon: "https://toppng.com/uploads/preview/many-programmers-know-at-least-2-or-3-languages-and-laptop-icon-with-code-11563402944emtqk56bdi.png",
      },
      {
        name: "Bisnis",
        icon: "https://freepngimg.com/save/70298-management-business-icons-consultant-company-social-marketing/2000x1999",
      },
      {
        name: "Keuangan dan Akuntansi",
        icon: "https://cdn-icons-png.flaticon.com/512/69/69881.png",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Category", null, {});
  },
};
