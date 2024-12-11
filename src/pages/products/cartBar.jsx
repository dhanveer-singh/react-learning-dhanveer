import { useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CartBar = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'iPhone 16 Pro', qty: 1 },
    { id: 2, title: 'iPhone 16 Plus', qty: 2 },
    // Add your cart items dynamically
  ]);

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="m-4 p-2 bg-blue-600 rounded-full shadow-lg text-white cursor-pointer max-w-[200px] flex justify-center items-center ms-auto">
      <div onClick={handleCartClick} className="flex items-center space-x-2">
        <FaShoppingCart size={24} />
        <div className="cart-info text-center">
          <span className="text-sm sm:text-base">
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
  );
};

export default CartBar;
