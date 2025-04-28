require('dotenv').config()
import * as CryptoJS from 'crypto-js'

const key = process.env.CRYPTO_KEY

/**
 * Encrypt a string
 * @param text The string to encrypt
 * @returns The encrypted string
 */
export const encryptStr = (text) => {
  return CryptoJS.AES.encrypt(text, key).toString()
}

/**
 * Decrypt a string
 * @param text The string to decrypt
 * @returns The decrypted string
 */
export const decryptStr = (text) => {
  return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8)
}
