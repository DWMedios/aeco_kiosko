import { MediasProps, SocialMedia } from '../../../interfaces'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6'

const socialMediaList: SocialMedia[] = [
  { name: 'Facebook', icon: <FaFacebook /> },
  { name: 'Twitter', icon: <FaTwitter /> },
  { name: 'Instagram', icon: <FaInstagram /> },
]

const Medias = ({ socialMedias }: MediasProps) => {
  return (
    <>
      {socialMedias.map((social, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-4xl">{social.icon}</span>
          <span className="text-4xl font-semibold tracking-widest">
            {social.name}
          </span>
        </div>
      ))}
    </>
  )
}

const SocialList: React.FC = () => {
  return (
    <div className="flex fixed bottom-24 justify-between items-center px-4 py-3 bg-green-100 bg-opacity-70 text-black shadow-md w-11/12 h-16 rounded-3xl">
      <Medias socialMedias={socialMediaList} />
    </div>
  )
}

export default SocialList
