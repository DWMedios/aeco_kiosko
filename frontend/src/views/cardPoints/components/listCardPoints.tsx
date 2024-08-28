import CardReward from '../../../components/cardReward';

const ListCardPoints = () => {
    const cardPoints = [
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Va y Ven', url: '/home' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'IE-Tram', url: '/home' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'OXXO Spin', url: '/home' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Farmacias del Ahorro', url: '/home' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'La Gas', url: '/home' },
    ];

    return (
        <div className="flex flex-row flex-wrap p-5 justify-center bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[850px] z-10">
            {cardPoints.map((cardPoint, index) => (
                <CardReward 
                    key={index}
                    imageSrc={cardPoint.imageSrc} 
                    label={cardPoint.label} 
                    url={cardPoint.url} 
                />
            ))}
        </div>
    );
};

export default ListCardPoints;
