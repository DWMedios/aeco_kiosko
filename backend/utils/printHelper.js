import { imageTicket, subTitleTicket, titleTicket } from './constants'

const path = require('path')

const escpos = require('escpos')
escpos.USB = require('escpos-usb')

const device = new escpos.USB()
const printer = new escpos.Printer(device)

export const ticketPrinter = async (movement, image = null) => {
  const tux = path.join(__dirname, image ? image : imageTicket)

  escpos.Image.load(tux, function (image) {
    device.open(function () {
      printer
        .align('ct')
        .image(image, 's8')
        .then(() => {
          printer
            .font('a')
            .align('ct')
            .style('bu')
            .size(1, 1)
            .encode('utf8')
            .text(justifyTextLine(titleTicket, ''))
            .align('lt')
            .text(wrapTextBlock(subTitleTicket))
            .text('\n')
            .text(justifyTextLine('Latas', movement.can_number))
            .text(justifyTextLine('Botellas', movement.bottle_number))
            .cut()
            .close()
            .cut()
            .close()
        })
    })
  })
}

const justifyTextLine = (textOne = '', textTwo = '') => {
  textOne = String(textOne).slice(0, 24 - textTwo.length)
  const spaces = ' '.repeat(Math.max(0, 24 - textOne.length - textTwo.length))
  return textOne + spaces + textTwo
}

function wrapTextBlock(text) {
  const words = text.split(' ')
  let line = ''
  let result = ''

  for (const word of words) {
    if ((line + word).length > 24) {
      result += line.trimEnd() + '\n'
      line = word + ' '
    } else {
      line += word + ' '
    }
  }

  if (line) {
    result += line.trimEnd()
  }

  return result
}
