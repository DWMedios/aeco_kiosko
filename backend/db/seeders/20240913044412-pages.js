/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const query = `INSERT INTO "pages" (id, name, metadata) VALUES 
                      (1,'Home','{"background":"home_background.png","logoLang":{"path":"/images/language_icon.svg","alt":"Language icon"},"logoHelp":{"path":"/images/Help_icon.svg","alt":"Help icon"},"logoUp":{"path":"/images/aeco.svg","alt":"AECO Logo up"},"logoDown":{"path":"/images/reciclaygana.svg","alt":"Recicla y Gana Logo down"},"button":{"label":"INICIAR","bgColor":"pink","url":"/conditions","borderRadious":"full","fontSize":"xl8"}}'),
                      (2,'Language', '{"background":"language_background.svg","button":{"labelEs":"ACEPTAR","labelEn":"AGREE","bgColor":"white","url":"/home","borderRadious":"xl3","fontSize":"xl6"}}'),
                      (3,'Help', '{"background":"help_background.svg","textCenter":{"title":"Soporte","description":"Cualquier duda o aclaración estamos para escucharte.","phoneText":"Envíanos WhatsApp"},"textDown":{"phone":"+52 999 888 7777","description":"¡Gracias por tu colaboración!"}}');`

    await queryInterface.sequelize.query(query, {
      type: Sequelize.QueryTypes.INSERT,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DELETE FROM "pages"', {
      type: Sequelize.QueryTypes.DELETE,
    })
  },
}
