
const CurrentDate = () => {
  const getCurrentDate = (): string => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('es-ES', { month: 'long' });
    const year = date.getFullYear();
    
    return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
  };

  return (
    <div className="text-2xl font-bold text-gray-800">
      {getCurrentDate()}
    </div>
  );
};

export default CurrentDate;
