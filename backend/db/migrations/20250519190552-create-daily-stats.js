/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('daily_stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      total_tickets: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_bottles: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total_cans: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      synchronized: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('daily_stats')
  }
}
