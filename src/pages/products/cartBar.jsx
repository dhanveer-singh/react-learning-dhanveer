import { useContext, useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import Cart from './cart';
import { ProductsContext } from '@/context/productsContext';

const CartBar = () => {
  const { cartItems } = useContext(ProductsContext);
  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <div onClick={()=>setShowCart(!showCart)} className='m-4 p-2 bg-blue-600 rounded-full shadow-lg text-white cursor-pointer max-w-[200px] flex justify-center items-center ms-auto'>
        <div className='flex items-center space-x-2'>
          <FaShoppingCart size={24} />
          <div className='cart-info text-center'>
            <span className='text-sm sm:text-base'>
              {cartItems.length > 0 ? (
                <>
                  <strong>{cartItems.length}</strong> Items
                </>
              ) : (
                'No Items'
              )}
            </span>
          </div>
        </div>
      </div>
      {showCart && <Cart />}
    </>
  );
};

export default CartBar;
