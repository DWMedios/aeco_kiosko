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
      <div
        className="flex flex-wrap justify-center gap-2 "
        style={{ border: "1px red solid" }}
      >
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-8 bg-custom-green rounded-full w-1/3 text-3xl min-w-1/3"
          >
            <span className="text-white font-bold">{reward}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsConditions;
