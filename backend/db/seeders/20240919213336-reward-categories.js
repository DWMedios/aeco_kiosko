/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const query = `INSERT INTO "reward_categories" (id, name, status, "order") VALUES 
                      (1,'Donativo', true, 1),
                      (2,'Servicios', true, 2)`

    // const query = `INSERT INTO "reward_categories" (id, name, status, "order") VALUES
    //                   (1,'Predial', true, 1),
    //                   (2,'Descuentos', true, 2),
    //                   (3,'Tarjeta', true, 3),
    //                   (4,'Donativo', true, 4),
    //                   (5,'aecopuntos', true, 5);`

    await queryInterface.sequelize.query(query, {
      type: Sequelize.QueryTypes.INSERT,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DELETE FROM "reward_categories"', {
      type: Sequelize.QueryTypes.DELETE,
    })
  },
}
