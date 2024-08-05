import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      console.log("Termino el timepo");
      navigation("/loading");
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen  bg-black">
      <div className="flex-grow flex justify-center items-center">
        <img src="/images/aeco.png" alt="Logo" />
      </div>
      <footer className="flex justify-center py-4">
        <img src="/images/dw.png" alt="Footer Logo" className="h-16" />
      </footer>
    </div>
  );
};

export default SplashScreen;
