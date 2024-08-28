import ScreenLayout from "../../components/layout/screenLayout";

const AddBarcode = () => {
  return (
    <ScreenLayout image="leafBackground.png">
      <div className="relative flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <span className="text-4xl text-center w-80">
            AÑADIR CÓDIGO DE BARRAS
          </span>
        </div>
        <span className="text-2xl text-center w-96 mt-14">
        Envianos a este whatsapp una foto del envase con la etiqueta y el código de barras VISIBLE
        </span>
        <img
          src="/images/QRcode.png"
          alt=""
          className="m-5 w-90 h-96"
        />
        <img
          src="/images/WhatsappLogo.png"
          alt=""
          className="w-20 h-auto"
        />
        <span className="text-4xl font-bold text-center w-96 mt-8">
        +52 999 888 7777
        </span>
        <span className="text-2xl text-center w-96 mt-7">
        ¡Gracias por tu colaboración!
        </span>

      </div>
    </ScreenLayout>
  );
};

export default AddBarcode;
