

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const query = `INSERT INTO "capacities" (id, packaging, weight, factor, description) VALUES 
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
(19, 'Botella', 24, 1350, '1.35L'),
(20, 'Botella', 14, 300, '300ml'),
(21, 'Botella', 14, 330, '330ml'),
(22, 'Botella', 23, 900, '900ml'),
(23, 'Botella', 45, 2250, '2.25L'),
(24, 'Botella', 14, 290, '290ml'),
(25, 'Lata', 14, 250, '250ml'),
(26, 'Lata', 14, 350, '350ml'),
(27, 'Lata', 17, 440, '440ml'),
(28, 'Lata', 17, 345, '345ml'),
(29, 'Botella', 19, 460, '460ml'),
(30, 'Botella', 16, 355, '355ml'),
(31, 'Botella', 12, 237, '237ml'),
(32, 'Lata', 17, 335, '335ml'),
(33, 'Lata', 12, 220, '220ml'),
(34, 'Lata', 20, 680, '680ml'),
(35, 'Botella', 17, 360, '360ml'),
(36, 'Lata', 13, 237, '237ml'),
(37, 'Lata', 17, 470, '470ml'),
(38, 'Botella', 22, 620, '620ml'),
(39, 'Botella', 23, 1200, '1.2L'),
(40, 'Botella', 12, 250, '250ml'),
(41, 'Botella', 14, 320, '320ml'),
(42, 'Lata', 17, 476, '476ml');`
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
