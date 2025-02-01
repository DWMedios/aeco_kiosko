/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('rewards', 'metadata', {
      type: Sequelize.JSONB,
      allowNull: true,
    })
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('rewards', 'metadata')
  },
}
