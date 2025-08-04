import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6'
import type { MediasProps, SocialMedia } from '../../../interfaces'

const socialMediaList: SocialMedia[] = [
  { name: 'universidad anáhuac mayab', icon: <FaFacebook /> },
  { name: '@anahuacmayab', icon: <FaInstagram /> },
  { name: '@unianahuacmayab', icon: <FaTiktok /> },
]

const Medias = ({ socialMedias }: MediasProps) => {
  return (
    <>
      {socialMedias.map((social, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-xl text-white">{social.icon}</span>
          <span className="text-xl font-semibold tracking-widest text-white">
            {social.name}
          </span>
        </div>
      ))}
    </>
  )
}

const SocialList: React.FC = () => {
  return (
    <div className="flex fixed bottom-24 justify-between items-center px-4 py-3 text-white shadow-md w-11/12 h-16 rounded-3xl">
      <Medias socialMedias={socialMediaList} />
    </div>
  )
}

export default SocialList
