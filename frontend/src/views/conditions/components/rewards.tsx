import useRewardCategories from '../../../hooks/useRewardCategories';


const RewardsConditions = () => {
  const { rewards, loading } = useRewardCategories();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full px-2">
      <div className="flex flex-wrap justify-center gap-2">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="flex flex-col justify-center items-center mx-8 bg-custom-green rounded-full w-1/3 h-16 text-4xl min-w-1/3 tracking-wider"
          >
            <span className="text-white font-bold">{reward.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsConditions;
