
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const query = `INSERT INTO "papers" (id, roll_quantity, current, status) VALUES 
                      (1, 8000, 8000, true)`

    await queryInterface.sequelize.query(query, {
      type: Sequelize.QueryTypes.INSERT,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DELETE FROM "papers"', {
      type: Sequelize.QueryTypes.DELETE,
    })
  },
}
