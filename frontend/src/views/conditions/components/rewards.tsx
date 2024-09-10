const RewardsConditions = () => {
  const rewards = [
    "Predial",
    "Descuentos",
    "Tarjeta",
    "Donativo",
    "Aecopuntos",
  ];
  return (
    <div className="w-full px-2">
      <div className="flex flex-wrap justify-center gap-2 ">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center mx-8 bg-custom-green rounded-full w-1/3 h-16 text-4xl min-w-1/3 tracking-wider"
          >
            <span className="text-white font-bold">{reward}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsConditions;
