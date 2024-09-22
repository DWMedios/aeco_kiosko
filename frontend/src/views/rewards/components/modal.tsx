import { useState } from "react";
import CurrentDateModal from './currentDateModal';
import ProductListModal from './ProductListModal';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-[#FE5A8F] text-white
      font-bold px-4 py-3 bg-opacity-90 w-[445px] text-3xl rounded-t-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 fixed top-1/2 right-[-200px] transform -translate-y-1/2 -rotate-90 tracking-widest"
        type="button"
        onClick={() => setShowModal(true)}
      >
        ENVASES INSERTADOS
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[700px] min-h-[700px] rounded-xl bg-[#FE5A8F]/95 text-white">
              <div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
                <div className="flex justify-between">
                  <button
                    className="bg-transparent border-0 pl-5 z-10"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-6xl font-medium">
                      x
                    </span>
                  </button>
                  <h3 className="text-3xl font-medium pt-6 pr-5 text-white"><CurrentDateModal /></h3>
                </div>
                <div className="relative p-6 flex-auto mt-16">
                    <h1 className='text-4xl text-center mb-4 tracking-wider'>ENVASES INSERTADOS</h1>
                </div>
                <ProductListModal />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;