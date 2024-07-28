

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('capacities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      packaging: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      factor: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(50),
        allowNull: false,
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
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('capacities')
  },
}
