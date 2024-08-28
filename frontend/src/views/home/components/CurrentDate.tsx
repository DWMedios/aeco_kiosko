import { getCurrentDate } from "../../../utils/dates";

const CurrentDate = () => {
  return (
    <div className="text-2xl font-bold text-gray-800">{getCurrentDate()}</div>
  );
};

export default CurrentDate;
