import CardReward from '../../../components/cardReward';

const ListDonatives = () => {
    const donatives = [
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Teletón', url: '/home' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Cruz Roja', url: '/home' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Orfanato', url: '/home' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Asilo', url: '/home' },
        { imageSrc: '../../../../public/images/QRcode.png', label: 'Albergue', url: '/home' },
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

export default ListDonatives;
