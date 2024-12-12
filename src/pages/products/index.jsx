import Cart from './cart';
import CartBar from './cartBar';
import Products from './products';
import { ProductsProvider } from '@/context/productsContext';

const Index = () => {
  return (
    <>
      <ProductsProvider>
        <CartBar />
        <Products />
        <Cart />
      </ProductsProvider>
    </>
  );
};

export default Index;
