import { MediasProps, SocialMedia } from "../../../interfaces";
import {FaSquareFacebook, FaInstagram, FaXTwitter  } from "react-icons/fa6"

const socialMediaList: SocialMedia[] = [
  { name: "Facebook", icon: <FaSquareFacebook /> },
  { name: "Twitter", icon: <FaXTwitter /> },
  { name: "Instagram", icon: <FaInstagram /> },
];

const Medias = ({ socialMedias }: MediasProps) => {
  return (
    <>
      {socialMedias.map((social, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-4xl">{social.icon}</span>
          <span className="text-4xl font-semibold tracking-widest">{social.name}</span>
        </div>
      ))}
    </>
  );
};

const SocialList = () => {
  return (
    <div className="flex fixed bottom-24 justify-between items-center px-5 py-4 bg-green-100 bg-opacity-70 text-black shadow-md w-11/12 h-18 rounded-3xl">
      <Medias socialMedias={socialMediaList} />
    </div>
  );
};

export default SocialList;
