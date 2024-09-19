/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const pages = [
      {
        id: 1,
        name: 'Home',
        metadata: {
          background:'home_background.png',
          logoLang:{
            path:'/images/language_icon.svg',
            alt:'Language icon'
          },
          logoHelp:{
            path:'/images/Help_icon.svg',
            alt:'Help icon'
          },
          logoUp:{
            path:'/images/aeco.svg',
            alt:'AECO Logo up'
          },
          logoDown:{
            path:'/images/reciclaygana.svg',
            alt:'Recicla y Gana Logo down'
          },
          button:{
            label:'INICIAR',
            bgColor:'pink',
            url:'/conditions',
            borderRadious:'full',
            fontSize:'xl8'
          }
        }
      },
      {
        id: 2,
        name: 'Language',
        metadata: {
          background: 'language_background.svg',
          button: {
            background:'language_background.svg',
            button:{
              labelEs:'ACEPTAR',
              labelEn:'AGREE',
              bgColor:'white',
              url:'/home',
              borderRadious:'xl3',
              fontSize:'xl6'
            }
          }
        },
      },
      {
        id: 3,
        name: 'Help',
        metadata: {
          background: 'help_background.svg',
          textCenter: {
            title: 'Soporte',
            description: 'Cualquier duda o aclaración estamos para escucharte.',
            phoneText: 'Envíanos WhatsApp',
          },
          textDown: {
            phone: '+52 999 888 7777',
            description: '¡Gracias por tu colaboración!',
          },
        },
      },
      {
        id: 4,
        name: 'Conditions',
        metadata: {
          background: 'shrubbery.png',
          title: 'Recompensas Disponibles',
          description: 'Tus envases deben estar en las siguientes condiciones para poder ser reciclados:',
          button: {
            label: '¡Entendido!',
            bgColor: 'white',
            url: '/example',
            borderRadious: 'xl3',
            fontSize: 'xl6',
          },
          lists: [
            {
              title: 'Envases de PET',
              icon: '/images/bottle.png',
              items: [
                'Sin aplastar.',
                'Con etiqueta.',
                'Sin residuos.',
              ],
            },
            {
              title: 'Latas de Aluminio',
              icon: '/images/can.png',
              items: [
                'Sin aplastar.',
                'Código de barras visible.',
                'Sin residuos.',
              ],
            },
          ],
        },
      },
      {
        id: 5,
        name: 'Example',
        metadata: {
          background: 'leafBackground.png',
          description: 'Inserta tu envase con el código de barras hacia arriba',
          centerImage: '/images/example.png',
          button: {
            label: '¡Estoy listo!',
            bgColor: 'white',
            url: '/insert',
            borderRadious: 'xl3',
            fontSize: 'xl6',
          },
        },
      }
    ]
    const query = `INSERT INTO "pages" (id, name, metadata) VALUES 
                      ${pages.map(page => {
    return `(${page.id},'${page.name}','${JSON.stringify(page.metadata)}')`
  }).join(',')};`

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
