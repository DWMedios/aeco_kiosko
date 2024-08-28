import CardReward from '../../../components/cardReward';

const ListDiscounts = () => {
    const donatives = [
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Super Aki', url: '/home' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Dunosusa', url: '/home' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'La Isla', url: '/home' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Cinemex', url: '/home' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Mariscos de Chichí', url: '/home' },
    ];

    return (
        <div className="flex flex-row flex-wrap p-5 justify-center bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[850px] z-10">
            {donatives.map((donative, index) => (
                <CardReward 
                    key={index}
                    imageSrc={donative.imageSrc} 
                    label={donative.label} 
                    url={donative.url} 
                />
            ))}
        </div>
    );
};

export default ListDiscounts;
