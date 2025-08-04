const path = require('path')

const escpos = require('escpos')
escpos.USB = require('escpos-usb')

const {
  imageTicket,
  descriptionTicket,
  titleTicket,
  footer,
} = require('./constants')


function getUsbDevice() {
  const devices = escpos.USB.findPrinter()
  if (devices.length === 0) {
    throw new Error('No se encontró ninguna impresora conectada')
  }
  return new escpos.USB()
}

const device = getUsbDevice()
const printer = new escpos.Printer(device)


exports.ticketPrinter = async (movement, image = null) => {
  // let lineCount = 5

  const tux = path.join(
    __dirname,
    '..',
    'public',
    'images',
    image ? image : imageTicket
  )

  escpos.Image.load(tux, function (image) {
    image.toRaster()
    device.open(function () {
      printer
        .align('ct')
        .image(image, 'd24')
        .then(() => {
          printer
            .font('a')
            .encode('utf8')
            .style('b')
            .align('ct')
            .size(1, 0.5)
            .text(wrapTextBlock(titleTicket))
            .text('\n')
            .align('lt')
            .style('normal')
            .text(wrapTextBlock(descriptionTicket))
            .text('\n')
            .style('b')
            .text(justifyTextLine('Latas', String(movement.can_number)))
            .text(justifyTextLine('Botellas', String(movement.bottle_number)))
            .text('\n')
            .style('normal')
            .align('ct')
            .text(wrapTextBlock(footer))
            .cut()
            .close()
        })
    })
  })
  return true
}

const justifyTextLine = (textOne = '', textTwo = '') => {
  const spaces = ' '.repeat(Math.max(0, 24 - (textOne.length + textTwo.length)))

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
