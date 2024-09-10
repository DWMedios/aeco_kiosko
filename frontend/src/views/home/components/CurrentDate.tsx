import { getCurrentDate } from "../../../utils/dates";

const CurrentDate = () => {
  return (
    <div className="text-4xl font-extrabold text-gray-800 tracking-wider">{getCurrentDate()}</div>
  );
};

export default CurrentDate;
