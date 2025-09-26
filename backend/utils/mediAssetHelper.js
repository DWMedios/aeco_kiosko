const fs = require('fs')
const path = require('path')
const { Buffer } = require('buffer')

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

const { fetchFromApi } = require('../utils/fetchHelper')


exports.processMediaAsset = async (mediaAsset, apiKey) => {
  try {
    const downloadUrl = await getDownloadUrl(mediaAsset.fileKey, apiKey)
    console.log("🚀 ~ apiKey:", apiKey)
    const localPath = await downloadMedia(downloadUrl, mediaAsset.fileKey)
    return localPath
  } catch (error) {
    const failedPath = path.join('/app/public/', mediaAsset.fileKey)
    if (fs.existsSync(failedPath)) {
      fs.unlinkSync(failedPath)
    }
    console.error('Error descargando imagen:', error)
  }

}

const getDownloadUrl = async (key, apiKey) => {
  try {
    console.log("🚀 ~ getDownloadUrl ~ apiKey:", apiKey)
    const data = await fetchFromApi(`/media-assets/aecos/download-url/${key}`, 'GET', null, apiKey)
    if (data.error) throw data
    return data.url
  } catch (error) {
    console.log('~ Download Url Error:', error)
    throw error
  }
}

const downloadMedia = async (mediaUrl, name) => {
  try {
    const response = await fetch(mediaUrl)

    if (!response.ok) {
      throw new Error(`Failed to download media: ${response.statusText}`)
    }

    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const directory = '/app/public/images'
    const imagePath = path.join(directory, name)

    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true })
    }

    fs.writeFileSync(imagePath, buffer)

    return `/app/public/synchronized/${name}`
  } catch (error) {
    console.error(`Error downloading image: ${error.message}`)
    throw error
  }
}

exports.deleteMedia = async (pathFile) => {
  try {
    const directory = '/app/public/images'
    const filePath = path.join(directory, path.basename(pathFile))
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
      return true
    } else {
      return true
    }
  } catch (error) {
    console.error(`Error al eliminar archivo: ${error.message}`)
    throw error
  }
}