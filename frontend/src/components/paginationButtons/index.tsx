import { PaginationButtonsInterface } from '../../interfaces';

const PaginationButtons = ({ 
    onPrevious, 
    onNext, 
    isPreviousDisabled, 
    isNextDisabled,     
    previousImageSrc = 'images/previous.png',
    nextImageSrc = 'images/next.png'
}: PaginationButtonsInterface) => {

    return (
        <div className="flex justify-between w-full mt-5 absolute px-24 bottom-52">
            <button 
                onClick={onPrevious} 
                disabled={isPreviousDisabled}
                className="p-4 disabled:opacity-0"
            >
                <img 
                    src={previousImageSrc} 
                    alt="previous" 
                    className="w-[100px] h-[95px] object-contain z-10" 
                />
            </button>
            <button 
                onClick={onNext} 
                disabled={isNextDisabled}
                className="p-4 disabled:opacity-0"
            >
                <img 
                    src={nextImageSrc} 
                    alt="next" 
                    className="w-[100px] h-[95px] object-contain z-10" 
                />
            </button>
        </div>
    );
};

export default PaginationButtons;
