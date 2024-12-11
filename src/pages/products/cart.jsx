import { useContext } from 'react';

import { ProductsContext } from '@/context/productsContext';

const Cart = () => {
  const CartContext = useContext(ProductsContext);
  const { count } = CartContext;
  return <div>Cart: {count}</div>;
};

export default Cart;
