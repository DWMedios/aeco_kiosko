import QRCodeComponent from '../../../components/qrCode';


const Ticket = () => {
  const QrCodeUrl = 'https://wa.me/9861190181?text=Hola%20Ayuntaeco%20|%20¡Necesito%20ayuda!';

  return (
    <div className='border-t-[10px]  border-dashed border-black w-[800px] h-[1300px] z-10'>
        <div className='border-b-[10px] border-l-[10px] border-r-[10px] border-solid border-black shadow-2xl rounded-lg flex flex-col justify-center items-center text-center w-[800px] h-[1300px] gap-8'>
            <span className='text-6xl tracking-wider font-bold'>Folio</span>
            <span className='font-semibold text-4xl tracking-wider'>aeco20240626A21</span>
            <QRCodeComponent size={400} value={QrCodeUrl}/>
            <ul className='text-3xl text-left'>
              <li>Coca Cola 600ml ----- 1</li>
              <li>Mirinda 350ml ----- 3</li>
              <li>Amper 473ml ----- 1</li>
            </ul>
            <ul className='text-3xl text-left'>
              <li>Recicladora ----- AE24</li>
              <li>Predial ----- AE24</li>
              <li>Ubicación ----- AE24</li>
              <li>Tarjeta ----- AE24</li>
            </ul>
            <span className='p-2 w-[700px] leading-10 text-2xl tracking-wider'>Para dudas y aclaraciones por operaciones en las maquinas recicladoras, cominiquese de Lunes a Viernes de 8:00 a 18:00 hrs al 999 888 7777.</span>
            <span className='text-[#FE5A8F] text-4xl font-bold'>Fecha: 10 / Septiembre / 2024 </span>
        </div>
    </div>
  )
}

export default Ticket;