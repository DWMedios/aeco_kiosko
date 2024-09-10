import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  size: string;
  container: string;
}

const ProductListModal = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [bottleCount, setBottleCount] = useState(0);
  const [canCount, setCanCount] = useState(0);

  useEffect(() => {
    // Simular llamada a la base de datos
    const fetchedProducts: Product[] = [
      { id: 1, name: 'Coca Cola', size: '600 ml.', container: 'Botella' },
      { id: 2, name: 'Coca Cola', size: '450 ml.', container: 'Botella' },
      { id: 3, name: 'Coca Cola', size: '355 ml.', container: 'Lata' },
      { id: 4, name: 'Coca Cola', size: '355 ml.', container: 'Lata' },
      { id: 5, name: 'Coca Cola', size: '355 ml.', container: 'Lata' },
      { id: 7, name: 'Coca Cola', size: '450 ml.', container: 'Botella' },
      { id: 8, name: 'Coca Cola', size: '450 ml.', container: 'Botella' },
      { id: 9, name: 'Pepsi Cola', size: '450 ml.', container: 'Botella' },
      { id: 10, name: 'Coca Cola', size: '355 ml.', container: 'Lata' },
      { id: 11, name: 'Coca Cola', size: '355 ml.', container: 'Lata' },
      { id: 12, name: 'Coca Cola', size: '355 ml.', container: 'Lata' },
      { id: 13, name: 'Coca Cola', size: '355 ml.', container: 'Lata' },
    ];
    setProducts(fetchedProducts);

    // Contar la cantidad de botellas y latas
    const bottleCount = fetchedProducts.reduce((count, product) => {
      return product.container === 'Botella' ? count + 1 : count;
    }, 0);

    const canCount = fetchedProducts.reduce((count, product) => {
      return product.container === 'Lata' ? count + 1 : count;
    }, 0);

    setBottleCount(bottleCount);
    setCanCount(canCount);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="h-[250px] w-[500px] overflow-y-scroll custom-scrollbar">
        <ul className="space-y-2 text-center">
          {products.map(product => (
            <li key={product.id} className="p-1 text-3xl tracking-wider leading-10">
              <span className="font-semibold">{product.name}</span> - {product.size} - {product.container}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row flex-wrap justify-between px-20 w-full items-center  mt-10 text-center">
        <div className="font-bold">
          <h1 className='text-8xl'>{bottleCount}</h1>
          <p className='text-4xl'>Botellas</p>
          </div>
        <div className="font-bold">
          <h1 className='text-8xl'>{canCount}</h1>
          <p className='text-4xl'>Latas</p>
          </div>
      </div>
    </div>
  );
}

export default ProductListModal;
