/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const query = `
      INSERT INTO "capacities" (id, packaging, weight, factor, description) 
      VALUES 
        (1, 'Botella', 42.4, 2000, '2L'),
        (2, 'Botella', 50.4, 2500, '2.5L'),
        (3, 'Botella', 39, 1500, '1.5L'),
        (4, 'Botella', 22, 1000, '1L'),
        (5, 'Botella', 22, 600, '600ml'),
        (6, 'Botella', 20, 500, '500ml'),
        (7, 'Botella', 18, 400, '400ml'),
        (8, 'Lata', 14, 355, '355ml'),
        (9, 'Lata', 18, 473, '473ml'),
        (10, 'Botella', 52, 3000, '3L'),
        (11, 'Botella', 24, 750, '750ml'),
        (12, 'Botella', 13, 235, '235ml'),
        (13, 'Lata', 13, 235, '235ml'),
        (14, 'Botella', 23, 1750, '1.75L'),
        (15, 'Botella', 24, 1250, '1.25L'),
        (16, 'Botella', 24, 1350, '1.35L'),
        (17, 'Botella', 14, 300, '300ml'),
        (18, 'Botella', 14, 330, '330ml'),
        (19, 'Botella', 23, 900, '900ml'),
        (20, 'Botella', 45, 2250, '2.25L'),
        (21, 'Botella', 14, 290, '290ml'),
        (22, 'Lata', 14, 250, '250ml'),
        (23, 'Lata', 14, 350, '350ml'),
        (24, 'Lata', 17, 440, '440ml'),
        (25, 'Lata', 17, 345, '345ml'),
        (26, 'Botella', 19, 460, '460ml'),
        (27, 'Botella', 16, 355, '355ml'),
        (28, 'Botella', 12, 237, '237ml'),
        (29, 'Lata', 17, 335, '335ml'),
        (30, 'Lata', 12, 220, '220ml'),
        (31, 'Lata', 20, 680, '680ml'),
        (32, 'Botella', 17, 360, '360ml'),
        (33, 'Lata', 13, 237, '237ml'),
        (34, 'Lata', 17, 470, '470ml'),
        (35, 'Botella', 22, 620, '620ml'),
        (36, 'Botella', 23, 1200, '1.2L'),
        (37, 'Botella', 12, 250, '250ml'),
        (38, 'Botella', 14, 320, '320ml'),
        (39, 'Lata', 17, 476, '476ml');
    `

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
