// src/components/CurrentTime.tsx
import  { useEffect, useState } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes} hrs`);
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-4xl font-extrabold text-gray-800 tracking-wider">
      {currentTime}
    </div>
  );
};

export default CurrentTime;
