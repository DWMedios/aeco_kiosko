/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        // const query = `INSERT INTO "rewards" (id, name, status, "order", type, metadata) VALUES 
        //                   (1, 'DIF', true, 1, 'donative', NULL),
        //                   (2, 'Cruz Roja', true, 2, 'donative', NULL),
        //                   (3, 'Cancer de mama', true, 3, 'donative', NULL),
        //                   (4, 'ViFac', true, 4, 'donative', NULL),
        //                   (5, 'VayVen', true, 1, 'service', '{"url": "https://google.com"}'),
        //                   (6, 'Predial', true, 2, 'service', '{"url": "https://youtube.com"}')`

        // await queryInterface.sequelize.query(query, {
        //   type: Sequelize.QueryTypes.INSERT,
        // })
    },

    async down(queryInterface, Sequelize) {
        // await queryInterface.sequelize.query('DELETE FROM "rewards"', {
        //   type: Sequelize.QueryTypes.DELETE,
        // })
    },
}
