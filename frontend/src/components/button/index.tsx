interface Button {
  color: string;
  border: string;
  label: string;
}

const Button = () => {
  return (
    <>
      <div className="w-full flex justify-center mb-40">
        <button className="bg-pink-500 w-3/4 py-5 rounded-full text-white font-extrabold text-6xl">
          INICIAR
        </button>
      </div>
    </>
  );
};

export default Button;
