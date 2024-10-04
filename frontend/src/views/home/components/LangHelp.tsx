import { Link } from 'react-router-dom'
import { usePageData } from '../../../hooks/usePageData'
import { MetaDataHome } from '../../../interfaces'

const LangHelp = () => {
  const { data: metas } = usePageData<MetaDataHome>('Home')

  if (!metas) return <div>No metadata available</div>

  return (
    <div className="w-full">
      <div className="w-24 h-52 ml-3 p-3 flex flex-col justify-between items-center bg-green-100 bg-opacity-70 rounded-full">
        <Link to="/language">
          <img
            className="w-20"
            src={metas.logoLang.path}
            alt={metas.logoLang.alt}
          />
        </Link>
        <Link to="/help">
          <img
            className="w-20"
            src={metas.logoHelp.path}
            alt={metas.logoHelp.alt}
          />
        </Link>
      </div>
    </div>
  )
}

export default LangHelp
