import Point from './point';

const ListPoints = () => {
    return(
            <div className="flex flex-row flex-wrap p-5 items-center justify-center gap-4 bg-[#D9D9D9] bg-opacity-50 text-black shadow-md rounded-3xl w-[600px] h-[850px]">
                <Point />
            </div>
    );
};

export default ListPoints;