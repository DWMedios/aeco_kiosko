import ScreenLayout from "../../components/layout/screenLayout";

const Scanning = () => {
  return (
    <ScreenLayout image="leafBackground.png">
      <div className="relative flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <span className="font-extrabold text-8xl text-center">
            LEYENDO
          </span>
        </div>
        <img
          src="/images/containers.png"
          alt=""
          className="m-10 mb-20 w-90 h-96"
        />

        <span className="text-6xl text-center w-96">
          ESTAMOS TRABAJANDO PARA TI
        </span>
      </div>
    </ScreenLayout>
  );
};

export default Scanning;