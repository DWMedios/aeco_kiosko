import BackButton from '../../components/backButton/BackButton'
import Button from '../../components/button'
import ScreenLayout from '../../components/layout/screenLayout'
import { usePageData } from '../../hooks/usePageData'
import {
  BackgroundButtonEnum,
  BorderColorEnum,
  BorderRadiusEnum,
  FontSizeEnum,
  MetaDataConditions,
  TextColorEnum,
} from '../../interfaces'
import ConditionsCard from './components/ConditionsCard'
import RewardsConditions from './components/rewards'

const Conditions = () => {
  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataConditions>('Conditions')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!metas) return <div>No metadata available</div>

  return (
    <ScreenLayout image={metas.background}>
      <div className="relative flex flex-col justify-center items-center h-screen select-none">
        <BackButton url="/home" />
        <div className="flex flex-col justify-center items-center text-center">
          <span className="text-8xl">{metas.title}</span>
        </div>
        <div className="w-full mt-20 mb-20">
          <RewardsConditions />
        </div>
        <div className="my-10 text-center mb-20">
          <span className="text-5xl ">{metas.description}</span>
        </div>
        <div className="flex flex-row gap-4 justify-center w-full text-2xl mb-20">
          {metas.lists.map((list, index) => (
            <ConditionsCard
              key={index}
              icon={list.icon}
              items={list.items}
              title={list.title}
            />
          ))}
        </div>
        <Button
          label={metas.button.label}
          url={metas.button.url}
          fontSize={
            FontSizeEnum[metas.button.fontSize as keyof typeof FontSizeEnum]
          }
          bgColor={
            BackgroundButtonEnum[
              metas.button.bgColor as keyof typeof BackgroundButtonEnum
            ]
          }
          borderRadius={
            BorderRadiusEnum[
              metas.button.borderRadious as keyof typeof BorderRadiusEnum
            ]
          }
          textColor={
            TextColorEnum[metas.button.textColor as keyof typeof TextColorEnum]
          }
          borderColor={
            BorderColorEnum[
              metas.button.borderColor as keyof typeof BorderColorEnum
            ]
          }
        />
      </div>
    </ScreenLayout>
  )
}

export default Conditions
