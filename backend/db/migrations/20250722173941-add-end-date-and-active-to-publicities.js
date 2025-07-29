/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('publicities', 'end_date', {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null,
    })

    await queryInterface.addColumn('publicities', 'active', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    })

    await queryInterface.addColumn('publicities', 'mime_type', {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: 'image/jpeg'
    })

    await queryInterface.removeColumn('publicities', 'local_path')
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('publicities', 'end_date')
    await queryInterface.removeColumn('publicities', 'active')
    await queryInterface.removeColumn('publicities', 'mime_type')
  }
}
