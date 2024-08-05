// SocialList.tsx
import React from 'react';

interface SocialMedia {
  name: string;
  icon: JSX.Element;
}

interface MediasProps {
  data: SocialMedia[];
}

const socialMediaList: SocialMedia[] = [
  { name: 'Facebook', icon: <i className="fab fa-facebook"></i> },
  { name: 'Twitter', icon: <i className="fab fa-twitter"></i> },
  { name: 'Instagram', icon: <i className="fab fa-instagram"></i> }
];

const Medias = ({data}:MediasProps) => {

  return (
  <>
  {data.map((social, index) => (
    <div key={index} className="flex items-center space-x-2">
      <span className="text-2xl">{social.icon}</span>
      <span className="text-lg font-semibold">{social.name}</span>
    </div>
  ))}
  </>
)
}

const SocialList: React.FC = () => {
  return (
    <div className="flex mb-5 justify-between items-center px-4 py-2 bg-green-100 bg-opacity-70 text-black shadow-md w-11/12 rounded-3xl">
     <Medias data = {socialMediaList} />
    </div>
  );
};

export default SocialList;
