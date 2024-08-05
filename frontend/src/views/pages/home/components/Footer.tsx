// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex mb-7 justify-between items-center px-4 py-2 bg-green-100 bg-opacity-70 text-black text-2xl shadow-md w-11/12 rounded-3xl">
      <a href="https://enlace-izquierda.com" className="hover:underline">
        ayuntaeco.com
      </a>
      <a href="https://enlace-derecha.com" className="hover:underline">
        dwmedios.com
      </a>
    </footer>
  );
};

export default Footer;
