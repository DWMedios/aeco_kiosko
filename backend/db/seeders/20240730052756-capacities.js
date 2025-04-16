/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const query = `INSERT INTO "capacities" (id, packaging, weight, factor, description) VALUES 
                      (1, 'bottle', 42.4, 2000, '2L'),
                      (2, 'bottle', 50.4, 2500, '2.5L'),
                      (3, 'bottle', 39, 1500, '1.5L'),
                      (4, 'bottle', 22, 1000, '1L'),
                      (5, 'bottle', 22, 600, '600ml'),
                      (6, 'bottle', 20, 500, '500ml'),
                      (7, 'bottle', 18, 400, '400ml'),
                      (8, 'can', 14, 355, '355ml'),
                      (9, 'can', 18, 473, '473ml'),
                      (10, 'bottle', 52, 3000, '3L'),
                      (11, 'bottle', 24, 750, '750ml'),
                      (12, 'bottle', 13, 235, '235ml'),
                      (13, 'can', 13, 235, '235ml'),
                      (14, 'bottle', 23, 1750, '1.75L'),
                      (15, 'bottle', 24, 1250, '1.25L'),
                      (19, 'bottle', 24, 1350, '1.35L'),
                      (20, 'bottle', 14, 300, '300ml'),
                      (21, 'bottle', 14, 330, '330ml'),
                      (22, 'bottle', 23, 900, '900ml'),
                      (23, 'bottle', 45, 2250, '2.25L'),
                      (24, 'bottle', 14, 290, '290ml'),
                      (25, 'can', 14, 250, '250ml'),
                      (26, 'can', 14, 350, '350ml'),
                      (27, 'can', 17, 440, '440ml'),
                      (28, 'can', 17, 345, '345ml'),
                      (29, 'bottle', 19, 460, '460ml'),
                      (30, 'bottle', 16, 355, '355ml'),
                      (31, 'bottle', 12, 237, '237ml'),
                      (32, 'can', 17, 335, '335ml'),
                      (33, 'can', 12, 220, '220ml'),
                      (34, 'can', 20, 680, '680ml'),
                      (35, 'bottle', 17, 360, '360ml'),
                      (36, 'can', 13, 237, '237ml'),
                      (37, 'can', 17, 470, '470ml'),
                      (38, 'bottle', 22, 620, '620ml'),
                      (39, 'bottle', 23, 1200, '1.2L'),
                      (40, 'bottle', 12, 250, '250ml'),
                      (41, 'bottle', 14, 320, '320ml'),
                      (42, 'can', 17, 476, '476ml');`

    await queryInterface.sequelize.query(query, {
      type: Sequelize.QueryTypes.INSERT,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DELETE FROM "capacities"', {
      type: Sequelize.QueryTypes.DELETE,
    })
  },
}
