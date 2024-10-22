import ScreenLayout from '../../components/layout/screenLayout'
import Button from '../../components/button'
import { useState, useEffect } from 'react'
import {
  BackgroundButtonEnum,
  BorderRadiusEnum,
  FontSizeEnum,
  MetaDataAccepted,
  TextColorEnum,
} from '../../interfaces'
import { usePageData } from '../../hooks/usePageData'

const mockDatabase = {
  '123456789': {
    name: 'Coca Cola',
    volume: '350ml',
    type: 'can',
  },
  '987654321': {
    name: 'Pepsi',
    volume: '500ml',
    type: 'bottle',
  },
}

const Accepted = () => {
  const [product, setProduct] = useState({ name: '', volume: '', image: '' })

  useEffect(() => {
    const barcode = '987654321'
    const productData = mockDatabase[barcode]

    if (productData) {
      const image =
        productData.type === 'can'
          ? '/images/canAccepted.png'
          : '/images/bottleAccepted.png'

      setProduct({ ...productData, image })
    }
  }, [])

  const {
    data: metas,
    loading,
    error,
  } = usePageData<MetaDataAccepted>('Accepted')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!metas) return <div>No metadata available</div>

  return (
    <ScreenLayout image={metas.background}>
      <div className="flex flex-col justify-center items-center h-screen select-none gap-16">
        <div className="flex flex-col justify-center items-center">
          <span className="font-extrabold text-8xl text-center w-[800px] z-10 tracking-wider">
            {metas.title}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center h-[600px]">
          <img
            src={product.image}
            alt="Container"
            className="m-10 mb-20 w-auto h-90"
          />
          <div className="flex flex-col bg-green-500 items-center w-96 rounded-3xl bg-opacity-70 text-white font-medium absolute p-2 tracking-wider">
            <span className="text-5xl font-bold tracking-widest">
              {product.name}
            </span>
            <span className="text-5xl font-bold tracking-widest">
              {product.volume}
            </span>
          </div>
        </div>
        <Button
          label={metas.buttonUp.label}
          url={metas.buttonUp.url}
          bgColor={
            BackgroundButtonEnum[
              metas.buttonUp.bgColor as keyof typeof BackgroundButtonEnum
            ]
          }
          textColor={TextColorEnum.white}
          borderRadius={
            BorderRadiusEnum[
              metas.buttonUp.borderRadious as keyof typeof BorderRadiusEnum
            ]
          }
          fontSize={
            FontSizeEnum[metas.buttonUp.fontSize as keyof typeof FontSizeEnum]
          }
        />
        <Button
          label={metas.buttonDown.label}
          url={metas.buttonDown.url}
          bgColor={
            BackgroundButtonEnum[
              metas.buttonDown.bgColor as keyof typeof BackgroundButtonEnum
            ]
          }
          textColor={TextColorEnum.white}
          borderRadius={
            BorderRadiusEnum[
              metas.buttonDown.borderRadious as keyof typeof BorderRadiusEnum
            ]
          }
          fontSize={
            FontSizeEnum[metas.buttonDown.fontSize as keyof typeof FontSizeEnum]
          }
        />
      </div>
    </ScreenLayout>
  )
}

export default Accepted
