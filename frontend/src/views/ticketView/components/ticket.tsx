import Button from '../../../components/button'
import QRCodeComponent from '../../../components/qrCode'
import { FontSizeEnum, TextColorEnum } from '../../../interfaces'

const Ticket = () => {
  const QrCodeUrl =
    'https://wa.me/9861190181?text=Hola%20Ayuntaeco%20|%20¡Necesito%20ayuda!'

  return (
    <div className="border-t-[10px]  border-dashed border-black w-[800px] h-[1450px] z-10">
      <div className="border-b-[10px] border-l-[10px] border-r-[10px] border-solid border-black shadow-2xl rounded-lg flex flex-col justify-center items-center text-center w-[800px] h-[1450px] gap-11">
        <span className="text-6xl tracking-wider font-bold">Folio</span>
        <span className="font-semibold text-4xl tracking-wider">
          aeco20240626A21
        </span>
        <QRCodeComponent size={500} value={QrCodeUrl} />
        <ul className="text-2xl">
          <li>Coca Cola 600 ml ---- 1</li>
          <li>Coca Cola 355 ml ---- 1</li>
          <li>Coca Cola 3l ---- 1</li>
        </ul>
        <ul className="text-2xl">
          <li>Donativo ---- 1</li>
          <li>Descuento ---- 1</li>
          <li>Predial ---- 1</li>
        </ul>
        <span className="p-2 w-[500px] leading-10 text-3xl tracking-wider">
          Para dudas y aclaraciones por operaciones en las maquinas
          recicladoras, cominiquese de Lunes a Viernes de 8:00 a 18:00 hrs al
          999 888 7777.
        </span>
        <span className="text-[#F10404] text-3xl font-bold">
          Fecha: 10 / Septiembre / 2024{' '}
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
