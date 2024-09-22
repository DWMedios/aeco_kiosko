/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rewards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      reward_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'reward_categories',
          key: 'id',
        },
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
    await queryInterface.dropTable('Rewards')
  },
}
