const CurrentDateModal = () => {
    const getCurrentDate = (): string => {
      const date = new Date();
      const dayOfWeek = date.toLocaleString('es-ES', { weekday: 'long' });
      const day = date.getDate().toString().padStart(2, '0'); 
      const month = date.toLocaleString('es-ES', { month: 'long' });
      const year = date.getFullYear();
      
      return `${dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)} ${day} de ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
    };
  
    return (
      <div className="text-3xl">
        {getCurrentDate()}
      </div>
    );
  };
  
  export default CurrentDateModal;
  