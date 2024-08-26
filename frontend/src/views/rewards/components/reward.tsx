interface RewardProps {
  title: string;
  imageUrl: string;
  onClick: () => void;
}

const Reward: React.FC<RewardProps> = ({ title, imageUrl, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center text-black w-[250px] h-[250px] focus:outline-none"
    >
      <img
        className="w-[200px] h-[200px]"
        src={imageUrl}
        alt={`Logo ${title}`}
      />
      <p className="text-2xl font-extralight tracking-wider mt-2">{title}</p>
    </button>
  );
};

export default Reward;
