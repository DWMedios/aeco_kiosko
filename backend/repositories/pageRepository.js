const connectToDatabase = require('../db/index')

let dbInstance
const initializeDatabase = async () => {
  if (!dbInstance) {
    dbInstance = await connectToDatabase()
  }
  return dbInstance
}

exports.getByName = async (name) => {
  const { Page } = await initializeDatabase()
  return await Page.findOne({
    where: { name },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.savePages = async (pages) => {
  const { Page } = await initializeDatabase()
  try {
    for (const page of pages) {
      await Page.upsert(page)
    }
    console.log('Páginas insertadas o actualizadas exitosamente.')
  } catch (error) {
    console.error('Error al insertar o actualizar páginas:', error)
    throw error
  }
}
