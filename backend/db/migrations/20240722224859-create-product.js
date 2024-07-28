

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      code: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      family: {
        type: Sequelize.STRING(40),
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      capacity_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: 'capacities',
          key: 'id',
        },
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
    await queryInterface.dropTable('products')
  },
}
