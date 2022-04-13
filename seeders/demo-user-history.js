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
    await queryInterface.bulkInsert("Histories", [
      {
        name: "umaru",
        date: new Date("2015-08-17T13:24:00").toISOString(),
        arrive: new Date("2015-08-17T13:24:00").toISOString().slice(11, -5),
        leave: new Date("2015-08-17T13:24:00").toISOString().slice(11, -5),
        createdAt: new Date("2015-08-17T13:24:00").toISOString(),
        updatedAt: new Date("2015-08-17T13:24:00").toISOString(),
      },
      {
        name: "marin",
        date: new Date("2015-08-17T13:24:00").toISOString(),
        arrive: new Date("2015-08-17T13:24:00").toISOString().slice(11, -5),
        leave: new Date("2015-08-17T13:24:00").toISOString().slice(11, -5),
        createdAt: new Date("2015-08-17T13:24:00").toISOString(),
        updatedAt: new Date("2015-08-17T13:24:00").toISOString(),
      },
      {
        name: "hirotaka",
        date: new Date("2019-11-29T22:18:00").toISOString(),
        arrive: new Date("2019-11-29T22:18:00").toISOString().slice(11, -5),
        leave: new Date("2019-11-29T22:18:00").toISOString().slice(11, -5),
        createdAt: new Date("2019-11-29T22:18:00").toISOString(),
        updatedAt: new Date("2019-11-29T22:18:00").toISOString(),
      },
      {
        name: "mesintempur",
        date: new Date("2021-08-18T09:47:00").toISOString(),
        arrive: new Date("2021-08-18T09:47:00").toISOString().slice(11, -5),
        leave: new Date("2021-08-18T09:47:00").toISOString().slice(11, -5),
        createdAt: new Date("2021-08-18T09:47:00").toISOString(),
        updatedAt: new Date("2021-08-18T09:47:00").toISOString(),
      },
      {
        name: "jivoryy",
        date: new Date("2019-08-19T09:47:00").toISOString(),
        arrive: new Date("2019-08-19T09:47:00").toISOString().slice(11, -5),
        leave: new Date("2019-08-19T09:47:00").toISOString().slice(11, -5),
        createdAt: new Date("2019-08-19T09:47:00").toISOString(),
        updatedAt: new Date("2019-08-19T09:47:00").toISOString(),
      },
      {
        name: "jivoryy",
        date: new Date("2019-08-20T09:47:00").toISOString(),
        arrive: new Date("2019-08-20T09:47:00").toISOString().slice(11, -5),
        leave: new Date("2019-08-20T09:47:00").toISOString().slice(11, -5),
        createdAt: new Date("2019-08-20T09:47:00").toISOString(),
        updatedAt: new Date("2019-08-20T09:47:00").toISOString(),
      },
      {
        name: "jivoryy",
        date: new Date("2019-08-21T09:47:00").toISOString(),
        arrive: new Date("2019-08-21T09:47:00").toISOString().slice(11, -5),
        leave: new Date("2019-08-21T09:47:00").toISOString().slice(11, -5),
        createdAt: new Date("2019-08-21T09:47:00").toISOString(),
        updatedAt: new Date("2019-08-21T09:47:00").toISOString(),
      },
      {
        name: "jivoryy",
        date: new Date("2019-08-22T09:47:00").toISOString(),
        arrive: new Date("2019-08-22T09:47:00").toISOString().slice(11, -5),
        leave: new Date("2019-08-22T09:47:00").toISOString().slice(11, -5),
        createdAt: new Date("2019-08-22T09:47:00").toISOString(),
        updatedAt: new Date("2019-08-22T09:47:00").toISOString(),
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
    await queryInterface.bulkDelete("Histories", null);
  },
};
