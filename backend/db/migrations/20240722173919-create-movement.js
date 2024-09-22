/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      can_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bottle_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      folio: {
        type: Sequelize.STRING(15),
        allowNull: false,
        defaultValue: '0',
      },
      synchronized: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable('movements')
  },
}
