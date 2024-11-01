import { useState } from 'react'

import CardReward from '../../../components/cardReward'
import PaginationButtons from '../../../components/paginationButtons'

const ListCardPoints = () => {
  const cardPoints = [
    { imageSrc: 'images/QRcode.png', label: 'Va y Ven', url: '/voucher' },
    { imageSrc: 'images/QRcode.png', label: 'IE-Tram', url: '/voucher' },
    { imageSrc: 'images/QRcode.png', label: 'OXXO Spin', url: '/voucher' },
    {
      imageSrc: 'images/QRcode.png',
      label: 'Farmacias del Ahorro',
      url: '/voucher',
    },
    { imageSrc: 'images/QRcode.png', label: 'La Gas', url: '/voucher' },
    { imageSrc: 'images/QRcode.png', label: 'Z Gas', url: '/voucher' },
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 5

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCardPoints = cardPoints.slice(startIndex, endIndex)

  const handleNextPage = () => {
    if (endIndex < cardPoints.length) {
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
        {currentCardPoints.map((cardPoint, index) => (
          <CardReward
            key={index}
            imageSrc={cardPoint.imageSrc}
            label={cardPoint.label}
            url={cardPoint.url}
          />
        ))}
      </div>
      <PaginationButtons
        onPrevious={handlePreviousPage}
        onNext={handleNextPage}
        isPreviousDisabled={currentPage === 0}
        isNextDisabled={endIndex >= cardPoints.length}
        previousImageSrc="images/previous.png"
        nextImageSrc="images/next.png"
      />
    </div>
  )
}

export default ListCardPoints
