import Cart from './cart';
import Products from './products';
import { ProductsProvider } from '@/context/productsContext';

const Index = () => {
  return (
    <>
      <ProductsProvider>
        <Cart />
        <Products />
      </ProductsProvider>
    </>
  );
};

export default Index;
