import { useState } from 'react';
import CardReward from '../../../components/cardReward';
import PaginationButtons from '../../../components/paginationButtons';

const ListDonatives = () => {
    const donatives = [
        { imageSrc: 'images/QRcode.png', label: 'Teletón', url: '/voucher' },
        { imageSrc: 'images/QRcode.png', label: 'Cruz Roja', url: '/voucher' },
        { imageSrc: 'images/QRcode.png', label: 'Orfanato', url: '/voucher' },
        { imageSrc: 'images/QRcode.png', label: 'Asilo', url: '/voucher' },
        { imageSrc: 'images/QRcode.png', label: 'Albergue', url: '/voucher' },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentDonatives = donatives.slice(startIndex, endIndex);

    const handleNextPage = () => {
        if (endIndex < donatives.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flex flex-col items-center bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[850px] z-10 p-5">
            <div className="flex flex-row flex-wrap justify-center">
                {currentDonatives.map((donative, index) => (
                    <CardReward 
                        key={index}
                        imageSrc={donative.imageSrc} 
                        label={donative.label} 
                        url={donative.url} 
                    />
                ))}
            </div>
            <PaginationButtons 
                onPrevious={handlePreviousPage} 
                onNext={handleNextPage} 
                isPreviousDisabled={currentPage === 0} 
                isNextDisabled={endIndex >= donatives.length} 
                previousImageSrc="images/previous.png" 
                nextImageSrc="images/next.png" 
            />
        </div>
    );
};

export default ListDonatives;
