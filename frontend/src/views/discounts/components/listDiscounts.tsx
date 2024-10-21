import { useState } from 'react'
import CardReward from '../../../components/cardReward'
import PaginationButtons from '../../../components/paginationButtons'

const ListDiscounts = () => {
  const discounts = [
    { imageSrc: 'images/QRcode.png', label: 'Super Aki', url: '/voucher' },
    { imageSrc: 'images/QRcode.png', label: 'Dunosusa', url: '/voucher' },
    { imageSrc: 'images/QRcode.png', label: 'La Isla', url: '/voucher' },
    { imageSrc: 'images/QRcode.png', label: 'Cinemex', url: '/voucher' },
    {
      imageSrc: 'images/QRcode.png',
      label: 'Mariscos de Chichí',
      url: '/voucher',
    },
    { imageSrc: 'images/QRcode.png', label: 'Soriana', url: '/voucher' },
    { imageSrc: 'images/QRcode.png', label: 'Super Willys', url: '/voucher' },
    { imageSrc: 'images/QRcode.png', label: 'Starbucks', url: '/voucher' },
    { imageSrc: 'images/QRcode.png', label: 'Sears', url: '/voucher' },
    { imageSrc: 'images/QRcode.png', label: 'RadioShack', url: '/voucher' },
    { imageSrc: 'images/QRcode.png', label: 'Nintendo', url: '/voucher' },
    { imageSrc: 'images/QRcode.png', label: 'Apple', url: '/voucher' },
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 5

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentDiscounts = discounts.slice(startIndex, endIndex)

  const handleNextPage = () => {
    if (endIndex < discounts.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="flex flex-col items-center bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[950px] z-10 p-5">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {currentDiscounts.map((discount, index) => (
          <CardReward
            key={index}
            imageSrc={discount.imageSrc}
            label={discount.label}
            url={discount.url}
          />
        ))}
      </div>
      <PaginationButtons
        onPrevious={handlePreviousPage}
        onNext={handleNextPage}
        isPreviousDisabled={currentPage === 0}
        isNextDisabled={endIndex >= discounts.length}
        previousImageSrc="images/previous.png"
        nextImageSrc="images/next.png"
      />
    </div>
  )
}

export default ListDiscounts
