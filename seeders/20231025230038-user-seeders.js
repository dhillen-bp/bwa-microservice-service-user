"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "admin",
          profession: "Admin Micro",
          role: "admin",
          email: "admin@mail.com",
          password: await bcrypt.hash("admin", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "dhillen",
          profession: "College Student",
          role: "student",
          email: "dhillen@mailcom",
          password: await bcrypt.hash("123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
