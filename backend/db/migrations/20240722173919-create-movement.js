"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("movements", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      machine_id: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      can_number: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      bottle_number: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      folio: {
        type: Sequelize.STRING(15),
        allowNull: false,
        defaultValue: "0",
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
    await queryInterface.dropTable("movements");
  },
};
