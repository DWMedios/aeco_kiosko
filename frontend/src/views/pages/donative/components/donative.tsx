import Logo from '../../../../assets/img/QRcode.svg'

const Donative = () => {
    return(
        <div className="flex flex-col justify-center items-center text-black w-[250px] h-[250px] cursor-pointer">
            <img className='w-[200px] h-[200px]' src={Logo} alt="Logo Donativo" />
            <p className='text-2xl font-extralight tracking-wider mt-2'>Título</p>
        </div>

    );
};

export default Donative;