import CartBar from './cartBar';
import Products from './products';
import { ProductsProvider } from '@/context/productsContext';

const Index = () => {
  return (
    <>
      <ProductsProvider>
        <CartBar />
        <Products />
      </ProductsProvider>
    </>
  );
};

export default Index;
