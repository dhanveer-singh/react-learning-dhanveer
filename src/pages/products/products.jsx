import { useContext } from 'react';

import ProductCard from '@/components/productCard';
import { ProductsContext } from '@/context/productsContext';

const Products = () => {
  const { products, addToCart } = useContext(ProductsContext);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-8'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Products;
