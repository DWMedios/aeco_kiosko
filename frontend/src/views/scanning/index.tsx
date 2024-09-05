import ScreenLayout from "../../components/layout/screenLayout";

const Scanning = () => {
  return (
    <ScreenLayout image="leafBackground.png">
      <div className="relative flex flex-col justify-center items-center h-[1255px]">
        <div className="flex flex-col text-center h-60">
          <span className="font-extrabold text-8xl text-center tracking-wide	">
            LEYENDO
          </span>
        </div>
        <img
          src="/images/containers.png"
          alt=""
          className="m-10 mb-20 w-90 h-72"
        />
        <span className="text-5xl text-center w-[500px]">
          ESTAMOS TRABAJANDO PARA TI
        </span>
      </div>
    </ScreenLayout>
  );
};

export default Scanning;