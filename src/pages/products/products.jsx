import { useContext } from 'react';

import ProductCard from '@/components/productCard';
import { ProductsContext } from '@/context/productsContext';

const Products = () => {
  const { products, addToCart } = useContext(ProductsContext);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-4'>
      {products.map((item) => (
        <ProductCard key={item?.id} product={item} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
