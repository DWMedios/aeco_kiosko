import  BackButton  from "../../components/backButton"
import CardReward from "../../components/cardReward"
import ScreenLayout from "../../components/layout/screenLayout"

const Services = () => {
    const RewardsList = [
      { imgSrc: '/images/QRcode.png', label: 'Predial', url: '/discounts' },
      { imgSrc: '/images/QRcode.png', label: 'Va y Ven', url: '/card_points' },
      
    ]
    return (
      <ScreenLayout image="shrubbery.png" timerInitialTime={30}>
        <div className="flex flex-col justify-center items-center gap-11 h-screen select-none">
          <BackButton url="/example" />
          <h1 className="text-8xl z-10 text-center max-w-[900px] font-bold tracking-wider mb-20">
            ELIGE TU SERVICIO
          </h1>
          {RewardsList.map((Reward, index) => (
          <CardReward
            key={index}
            imageSrc={Reward.imgSrc}
            label={Reward.label}
            url={Reward.url}
          />
        ))}
        </div>
        
      </ScreenLayout>
    )
  }

export default Services