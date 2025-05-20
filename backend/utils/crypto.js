require('dotenv').config()
const CryptoJS = require('crypto-js')

const key = process.env.CRYPTO_KEY

/**
 * Encrypt a string
 * @param text The string to encrypt
 * @returns The encrypted string
 */
const encryptStr = (text) => {
  return CryptoJS.AES.encrypt(text, key).toString()
}

/**
 * Decrypt a string
 * @param text The string to decrypt
 * @returns The decrypted string
 */
const decryptStr = (text) => {
  return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8)
}

module.exports = { encryptStr, decryptStr }
