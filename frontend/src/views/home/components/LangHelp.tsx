import { Link } from "react-router-dom";

const LangHelp = () => {
  return (
    <div className="w-full">
      <div className="w-24 h-52 ml-3 p-3 flex flex-col justify-between items-center bg-green-100 bg-opacity-70 rounded-full">
        <Link to="/language">
          <img
            className="w-20"
            src="/images/language_icon.svg"
            alt="Language Icon"
          />
        </Link>
        <Link to="/help">
          <img
            className="w-20"
            src="/images/Help_icon.svg"
            alt="Help Icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default LangHelp;
