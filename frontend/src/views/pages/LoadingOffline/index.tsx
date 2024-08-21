import { Icon } from "../../../interfaces";

const LoadingOffline = ({ icon = "loading" }: Icon) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-custom-green">
      <div className="absolute inset-0 bg-[url('/images/bg-loading-offline.png')] bg-cover bg-center" />
      <div className="relative flex-grow flex justify-center items-center">
        <img src={`/images/${icon}.png`} alt="Logo" />
      </div>
    </div>
  );
};

export default LoadingOffline;
