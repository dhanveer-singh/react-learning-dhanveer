import { useState } from 'react';

import ProductCard from '@/components/productCard';
import { items } from '@/mockdata/products';

const Products = () => {
  const [productData] = useState(items);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-8'>
      {productData.map((product, index) => (
        <ProductCard
          key={index}
          image={product?.image}
          title={product?.title}
          description={product?.description}
          price={product?.price}
        />
      ))}
    </div>
  );
};

export default Products;
