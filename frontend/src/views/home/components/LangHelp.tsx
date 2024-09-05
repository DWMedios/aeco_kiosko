import { Link } from "react-router-dom";

const LangHelp = () => {
  return (
    <div className="w-full">
      <div className="w-20 ml-3 p-2 flex flex-col justify-center items-center bg-green-100 bg-opacity-70 rounded-full">
        <Link to="/language">
          <img
            className="w-32 mt-2 mb-10"
            src="/images/language_icon.svg"
            alt="Language Icon"
          />
        </Link>
        <Link to="/help">
          <img
            className="w-32 mb-2"
            src="/images/Help_icon.svg"
            alt="Help Icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default LangHelp;
