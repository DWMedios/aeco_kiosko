import ScreenLayout from '../../components/layout/screenLayout'

const OutOfService = () => {
  return (
    <ScreenLayout image="shrubbery.png">
      <div className="flex flex-col justify-center items-center gap-11 z-10 h-screen select-none">
        <h1 className="text-8xl font-bold text-center w-[900px] leading-snug tracking-wide">
          MÁQUINA FUERA DE SERVICIO
        </h1>
        <img
          src="images/FueraServicio.png"
          className="w-[600px] h-auto mt-10"
          alt="Fuera de Servicio"
        />
      </div>
    </ScreenLayout>
  )
}

export default OutOfService
