import LangIcon from '../../../../assets/img/language_icon.svg'
import HelpIcon from '../../../../assets/img/Help_icon.svg'

const LangHelp: React.FC = () => {
    return (
        <>
        <div className='w-full'>
            <div className='w-16 ml-3 p-1 flex flex-col justify-center items-center bg-green-100 bg-opacity-70 rounded-full'>
                <img className='w-10 mt-2 mb-6' src={LangIcon} />
                <img className='w-10 mb-2' src={HelpIcon} />
            </div>
         </div>
        </>
  );
};
  
  export default LangHelp
  