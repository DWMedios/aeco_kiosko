import { CountProduct } from "../interfaces"

export const SavePackaging =(product: CountProduct) => {
  const products = GetPackagings() || { products: [], can: 0, bottle: 0 };
  const updatedProducts = {
    products: [...products.products, product],
    can: product.packaging === 'Lata' ? products.can + 1 : products.can,
    bottle: product.packaging === 'Botella' ? products.bottle + 1 : products.bottle,
  };
  sessionStorage.setItem('containers', JSON.stringify(updatedProducts));
}

export const GetPackagings = (): {
  products: CountProduct[];
  can: number;
  bottle: number;
} | null => {
  const data = sessionStorage.getItem('containers');
  return data ? JSON.parse(data) : null;
};