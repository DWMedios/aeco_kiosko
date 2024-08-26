
const Ticket = () => {
  return (
        <div className='border-4 border-solid border-black rounded-md flex flex-col justify-center items-center text-center w-[450px] h-[900px]'>
            <p className='text-lg'>Folio</p>
            <p className='font-semibold text-2xl'>aeco20240626A21</p>
            <img src="/public/images/QRcode.png" alt="QR Code Ticket" className='w-96'/>
            <p className='p-2 w-[400px] leading-7'>Para dudas y aclaraciones por operaciones en las maquinas recicladoras, cominiquese de Lunes a Viernes de 8:00 a 18:00 hrs al 999 888 7777.</p>
        </div>
  )
}

export default Ticket;