
const RecyclePoint = () => {
    return(
        <div className="flex flex-col justify-center items-center text-black w-[250px] h-[250px] cursor-pointer gap-16">
        <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Número de Teléfono con WhatsApp"
            className="px-4 py-2 border-b-4 border-gray-400 bg-transparent w-[400px] text-center font-semibold focus:outline-none text-xl"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
        />
        <button className="border-[#00804f] border-4 text-black text-4xl font-bold p-2 rounded-xl w-80 h-16 cursor-pointer">
          ENVIAR
        </button>
        </div>
    );
};

export default RecyclePoint;