"use strict";

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
    await queryInterface.bulkInsert("Users", [
      {
        name: "umaru",
        group: "TEST",
        email: "test@test.com",
        createdAt: new Date("2015-08-17T13:24:00").toDateString(),
        updatedAt: new Date("2015-08-17T13:24:00").toDateString(),
      },
      {
        name: "marin",
        group: "TEST",
        email: "test@test.com",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: "hirotaka",
        group: "TEST",
        email: "test@test.com",
        createdAt: new Date("2019-11-29T22:18:00").toISOString(),
        updatedAt: new Date("2019-11-29T22:18:00").toISOString(),
      },
      {
        name: "mesintempur",
        group: "TEST",
        email: "test@test.com",
        createdAt: new Date("2021-08-18T09:47:00").toISOString(),
        updatedAt: new Date("2021-08-18T09:47:00").toISOString(),
      },
      {
        name: "jivoryy",
        group: "TEST",
        email: "test@test.com",
        createdAt: new Date("2019-08-18T09:47:00").toISOString(),
        updatedAt: new Date("2019-08-18T09:47:00").toISOString(),
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
    await queryInterface.bulkDelete("Users", null);
  },
};
