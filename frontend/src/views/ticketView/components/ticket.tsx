import QRCodeComponent from '../../../components/qrCode'

const Ticket = () => {
  const QrCodeUrl =
    'https://wa.me/9861190181?text=Hola%20Ayuntaeco%20|%20¡Necesito%20ayuda!'

  return (
    <div className="border-t-[10px]  border-dashed border-black w-[800px] h-[1500px] z-10">
      <div className="border-b-[10px] border-l-[10px] border-r-[10px] border-solid border-black shadow-2xl rounded-lg flex flex-col justify-center items-center text-center w-[800px] h-[1500px] gap-11">
        <span className="text-6xl tracking-wider font-bold">Folio</span>
        <span className="font-semibold text-4xl tracking-wider">
          aeco20240626A21
        </span>
        <QRCodeComponent size={700} value={QrCodeUrl} />
        <span className="p-2 w-[500px] leading-10 text-4xl leading-10 tracking-wider">
          Para dudas y aclaraciones por operaciones en las maquinas
          recicladoras, cominiquese de Lunes a Viernes de 8:00 a 18:00 hrs al
          999 888 7777.
        </span>
        <span className="text-[#F10404] text-4xl font-bold">
          Fecha: 10 / Septiembre / 2024{' '}
        </span>
      </div>
    </div>
  )
}

export default Ticket
