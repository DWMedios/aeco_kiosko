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
      synchronized: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 1,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("movements");
  },
};
