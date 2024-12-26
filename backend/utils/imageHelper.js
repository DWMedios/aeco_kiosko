const fs = require('fs')
const path = require('path')

const { fetchFromApi } = require('../utils/fetchHelper')

const directory = '/app/public/images'

exports.downloadImage = async (imageUrl, fileName) => {
  try {
    const response = await fetchFromApi(imageUrl)

    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.statusText}`)
    }

    const imagePath = path.join(directory, fileName)

    // Asegurarse de que el directorio existe
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true })
    }

    // Guardar la imagen en el directorio
    const fileStream = fs.createWriteStream(imagePath)
    response.body.pipe(fileStream)

    await new Promise((resolve, reject) => {
      fileStream.on('finish', resolve)
      fileStream.on('error', reject)
    })

    console.log(`Image saved at ${imagePath}`)
  } catch (error) {
    console.error(`Error downloading image: ${error.message}`)
    throw error
  }
}
