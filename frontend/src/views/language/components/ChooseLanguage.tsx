import { useState } from 'react';

const ChooseLanguage = () => {
    // Inicializamos el estado con 'es' para que el idioma español esté seleccionado por defecto
    const [selectedLanguage, setSelectedLanguage] = useState<string>('es');

    const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedLanguage(event.target.value);
    };
  
  return (
    <div className="p-4 min-h-[800px] flex flex-col items-center justify-center">
      <h1 className='text-center text-5xl mt-20 mb-5'>
        Seleccione un idioma
      </h1>
      <form className="flex flex-col justify-center items-center space-y-4 z-10">
      <label className="flex items-center text-4xl  text-center p-6">
        <input
          type="radio"
          name="language"
          value="es"
          checked={selectedLanguage === 'es'}
          onChange={handleLanguageChange}
          className="hidden"
        />
        <span
          className={`cursor-pointer py-2 px-4 rounded-full w-80 font-medium ${
            selectedLanguage === 'es' ? 'bg-[#90c9ac] text-black' : 'bg-white'
          }`}
          onClick={() => setSelectedLanguage('es')}
        >
          Español
        </span>
      </label>

      <label className="flex items-center text-4xl text-center p-6">
        <input
          type="radio"
          name="language"
          value="en"
          checked={selectedLanguage === 'en'}
          onChange={handleLanguageChange}
          className="hidden"
        />
        <span
          className={`cursor-pointer py-2 px-4 rounded-full w-80 font-medium ${
            selectedLanguage === 'en' ? 'bg-[#90c9ac] text-black' : 'bg-white'
          }`}
          onClick={() => setSelectedLanguage('en')}
        >
          Inglés
        </span>
      </label>
    </form>
      <div className="flex justify-center mt-8">
        <button className="border-[#00804f] border-4 text-black text-4xl font-bold p-2 rounded-xl w-80 h-16 z-10">
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default ChooseLanguage;
