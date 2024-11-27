import { useState, useEffect } from 'react'
import { GetPackagings } from '../../../utils/savePackaging'
import { Products } from '../../../interfaces'

const ProductListModal = () => {
  const [products, setProducts] = useState<Products | null>( null )

  useEffect(() => {
    setProducts( GetPackagings() )
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-[250px] w-[500px] overflow-y-scroll custom-scrollbar">
        <ul className="space-y-2 text-center">
          {products?.products.map((p, i) => (
            <li
              key={i}
              className="p-1 text-3xl tracking-wider leading-10"
            >
              <span className="font-semibold">{`${p.name} - ${p.packaging}`}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row flex-wrap justify-between px-20 w-full items-center  mt-10 text-center">
        <div className="font-bold">
          <h1 className="text-8xl">{products?.bottle}</h1>
          <p className="text-4xl">Botellas</p>
        </div>
        <div className="font-bold">
          <h1 className="text-8xl">{products?.can}</h1>
          <p className="text-4xl">Latas</p>
        </div>
      </div>
    </div>
  )
}

export default ProductListModal
