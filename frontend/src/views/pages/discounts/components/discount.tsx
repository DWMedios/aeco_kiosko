import Logo from '../../../../assets/img/QRcode.svg'

const Discount = () => {
    return(
        <div className="flex flex-col justify-center items-center text-black w-[250px] h-[250px]">
            <img className='w-[200px] h-[200px]' src={Logo} alt="Logo Recompensa" />
            <p className='text-2xl font-extralight tracking-wider mt-2'>Título</p>
        </div>

    );
};

export default Discount;