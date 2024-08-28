import { useNavigate } from "react-router-dom";
import { Buttoninterface } from "../../interfaces";

const Button = ({
  label = "iniciar",
  bgColor = null,
  borderRadius = "full",
  textColor = "green-500",
  borderColor = "border-4 border-green-500",
  url,
}: Buttoninterface) => {
  const navigation = useNavigate();

  return (
    <>
      <div className="w-full flex justify-center mb-40">
        <button
          onClick={() => navigation(url)}
          className={`${bgColor} w-3/4 py-5 rounded-${borderRadius} ${borderColor} text-${textColor} font-extrabold text-6xl uppercase `}
        >
          {label}
        </button>
      </div>
    </>
  );
};

export default Button;
