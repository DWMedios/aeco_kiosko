import { useState, useEffect } from 'react'
import { FontSizeEnum, Packagings, TextColorEnum } from '../../../interfaces'
import Button from '../../../components/button'
import QRCodeComponent from '../../../components/qrCode'
import { GetTicket } from '../../../utils/savePackaging'
import { getFormattedDate } from '../../../utils/dates'
import { compressToEncodedURIComponent } from 'lz-string'

const Ticket = () => {
  const [products, setProducts] = useState<Packagings | null>(null)
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null)
  useEffect(() => {
    const ticket = GetTicket()
    setProducts(ticket)
    const jsonString = JSON.stringify({ date: getFormattedDate(), ...ticket })
    const compressed = compressToEncodedURIComponent(jsonString)
    setQrCodeUrl(`https://ayuntaeco.com/ticket?data=${compressed}`)
  }, [])

  return (
    <div className="border-t-[10px]  border-dashed border-black w-[800px] h-[1450px] z-10">
      <div className="mb-4 border-b-[10px] border-l-[10px] border-r-[10px] border-solid border-black shadow-2xl rounded-lg flex flex-col justify-center items-center text-center w-[800px] h-[1450px] gap-11">
        <span className="text-6xl tracking-wider font-bold">Folio</span>
        <span className="font-semibold text-4xl tracking-wider">
          aeco20240626A21
        </span>
        {qrCodeUrl && <QRCodeComponent size={500} value={qrCodeUrl} />}
        <ul className="text-2xl">
          {products?.packagings.map((p, i) => (
            <li key={i}>
              <span>{`${p.name} - ${p.quantity}`}</span>
            </li>
          ))}
        </ul>

        <span className="p-2 w-[500px] leading-10 text-3xl tracking-wider">
          Para dudas y aclaraciones por operaciones en las maquinas
          recicladoras, comuniquese de Lunes a Viernes de 8:00 a 18:00 hrs al
          999 888 7777.
        </span>
        <span className="text-[#F10404] text-3xl font-bold">
          {getFormattedDate()}
        </span>
      </div>
      <Button
        label="Finalizar"
        url="/final_view"
        bgColor={null}
        textColor={TextColorEnum.pink}
        fontSize={FontSizeEnum.xl5}
      />
    </div>
  )
}

export default Ticket
