import { Url } from "../../../interfaces";

const ImageBackground = ({ url }: Url) => {
  return (
    <div
      className={`absolute inset-0  bg-cover bg-center`}
      style={{ backgroundImage: `url(/images/${url})` }}
    />
  );
};

export default ImageBackground;
