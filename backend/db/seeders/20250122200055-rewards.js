/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const query = `INSERT INTO "rewards" (id, name, status, "order", reward_category_id, metadata) VALUES 
                      (1, 'DIF', true, 1, 1, NULL),
                      (2, 'Cruz Roja', true, 2, 1, NULL),
                      (3, 'Cancer de mama', true, 3, 1, NULL),
                      (4, 'ViFac', true, 4, 1, NULL),
                      (5, 'VayVen', true, 1, 2, '{"url": "https://google.com"}'),
                      (6, 'Predial', true, 2, 2, '{"url": "https://youtube.com"}')`

    await queryInterface.sequelize.query(query, {
      type: Sequelize.QueryTypes.INSERT,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DELETE FROM "rewards"', {
      type: Sequelize.QueryTypes.DELETE,
    })
  },
}
