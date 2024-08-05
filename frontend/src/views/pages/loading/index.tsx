import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {

  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      console.log("Termino el timepo");
      navigation("/home");
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen  bg-green-600">
      <div className="flex-grow flex justify-center items-center">
        <img src="/images/loading.png" alt="Logo" />
      </div>
    </div>
  );
};

export default Loading;
