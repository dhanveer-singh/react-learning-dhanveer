import { useContext } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ProductsContext } from '@/context/productsContext';

const CartBar = () => {
  const { cartItems } = useContext(ProductsContext);

  return (
    <div className='m-4 p-2 bg-blue-600 rounded-full shadow-lg text-white cursor-pointer max-w-[200px] flex justify-center items-center ms-auto'>
      <Link to={'/cart'} className='flex items-center space-x-2'>
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
      </Link>
    </div>
  );
};

export default CartBar;
