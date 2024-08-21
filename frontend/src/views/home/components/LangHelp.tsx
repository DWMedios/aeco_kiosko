import { Link } from "react-router-dom";

const LangHelp = () => {
  return (
    <div className="w-full">
      <div className="w-14 ml-3 p-1 flex flex-col justify-center items-center bg-green-100 bg-opacity-70 rounded-full">
        <Link to="/language">
          <img
            className="w-10 mt-2 mb-6"
            src="/images/language_icon.svg"
            alt="Language Icon"
          />
        </Link>
        <Link to="/help">
          <img
            className="w-10 mb-2"
            src="/images/Help_icon.svg"
            alt="Help Icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default LangHelp;
