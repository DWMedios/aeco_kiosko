import ScreenLayout from "../../components/layout/screenLayout";
import Button from "../../components/button";
import { useState, useEffect } from "react";
import { BackgroundButtonEnum, FontSizeEnum, TextColorEnum } from '../../interfaces';

const mockDatabase = {
  "123456789": {
    name: "Coca Cola",
    volume: "350ml",
    type: "can",
  },
  "987654321": {
    name: "Pepsi",
    volume: "500ml",
    type: "bottle",
  },
  "987654323": {
    name: "Mirinda",
    volume: "600ml",
    type: "bottle",
  },
  "123456723": {
    name: "Amper",
    volume: "425ml",
    type: "can",
  },
};

const Accepted = () => {
  const [product, setProduct] = useState({ name: "", volume: "", image: "" });

  useEffect(() => {
    const barcode = "123456723";
    const productData = mockDatabase[barcode];

    if (productData) {
      const image =
        productData.type === "can"
          ? "/images/canAccepted.png"
          : "/images/bottleAccepted.png";

      setProduct({ ...productData, image });
    }
  }, []);

  return (
    <ScreenLayout image="backgroundAccepted.png">
      <div className="flex flex-col justify-center items-center h-screen select-none gap-16">
        <div className="flex flex-col justify-center items-center">
          <span className="font-extrabold text-8xl text-center w-[800px] z-10 tracking-wider">
            ENVASE ACEPTADO
          </span>
        </div>
        <div className="flex flex-col justify-center items-center h-[600px]">
          <img
            src={product.image}
            alt="Container"
            className="m-10 mb-20 w-auto h-[500px]"
          />
          <div className="flex flex-col bg-green-500 items-center w-[500px] rounded-3xl bg-opacity-70 text-white font-medium absolute p-2 tracking-wider">
            <span className="text-5xl font-bold tracking-widest">{product.name}</span>
            <span className="text-5xl font-bold tracking-widest">{product.volume}</span>
          </div>
        </div>
        <Button 
          label="INGRESAR OTRO ENVASE" 
          url="/insert" 
          bgColor={BackgroundButtonEnum.green}
          borderColor={null}
          textColor={TextColorEnum.white}
          fontSize={FontSizeEnum.xl6}
        />
        <Button 
          label="FINALIZAR" 
          url="/rewards" 
          borderColor="border-4 border-[#FE5A8F]"
          textColor={TextColorEnum.pink}
          fontSize={FontSizeEnum.xl6}
        />
      </div>
    </ScreenLayout>
  );
};

export default Accepted;
