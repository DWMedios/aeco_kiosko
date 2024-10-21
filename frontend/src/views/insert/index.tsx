import ScreenLayout from '../../components/layout/screenLayout'

const Insert = () => {
  return (
    <ScreenLayout image="leafBackground.png">
      <div className="relative flex flex-col justify-center items-center h-screen gap-20">
        <div className="flex flex-col text-center h-60">
          <span className="font-extrabold text-8xl text-center tracking-wider	w-[500px]">
            INSERTAR ENVASE
          </span>
        </div>
        <img
          src="/images/containers.png"
          alt=""
          className="m-10 mb-20 w-auto h-[500px]"
        />
        <span className="text-5xl text-center w-96">
          EL RECICLAJE COMIENZA AQUÍ
        </span>
      </div>
    </ScreenLayout>
  )
}

export default Insert
