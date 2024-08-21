import { useState } from "react";
import CurrentDateModal from './currentDateModal';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-[#FE5A8F] text-white
      font-bold px-4 py-3 bg-opacity-90 w-[445px] text-2xl rounded-t-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 fixed top-1/2 right-[-200px] transform -translate-y-1/2 -rotate-90 tracking-widest"
        type="button"
        onClick={() => setShowModal(true)}
      >
        ENVASES INSERTADOS
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[500px] min-h-[500px] rounded-lg bg-[#FE5A8F] bg-opacity-90 text-white">
              <div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
                <div className="flex justify-between">
                  <button
                    className="bg-transparent border-0 pl-5"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-6xl font-light">
                      x
                    </span>
                  </button>
                  <h3 className="text-3xl font-thin pt-6 pr-5 text-white"><CurrentDateModal /></h3>
                </div>
                <div className="relative p-6 flex-auto">
                    <h1 className='text-3xl text-center'>ENVASES INSERTADOS</h1>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;