import { useContext } from 'react';

import { FiMinus, FiPlus } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { ProductsContext } from '@/context/productsContext';

const Cart = () => {
  const { cartItems, setCartItems, updateQuantity } =
    useContext(ProductsContext);

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <div className='cart-container flex flex-col md:flex-row p-6 bg-white shadow-md rounded-lg'>
      <div className='cart-items w-full md:w-3/5 pr-6'>
        <h2 className='mt-8  text-2xl font-semibold mb-4'>Your Cart</h2>
        {cartItems?.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems?.map((item) => (
                <li
                  key={item?.id}
                  className='flex justify-between items-center py-2 border-b'
                >
                  <div className='flex items-center'>
                    <img
                      src={item?.images[0]}
                      alt={item?.title}
                      className='w-16 h-16 object-cover rounded-md mr-4'
                    />
                    <div>
                      <h3 className='font-medium'>{item?.title}</h3>
                      <p className='text-gray-600 text-sm'>
                        {item?.description}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <button
                      className='px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300'
                      onClick={() => updateQuantity(item?.id, -1)}
                    >
                      <FiMinus />
                    </button>
                    <span>{item?.qty}</span>
                    <button
                      className='px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300'
                      onClick={() => updateQuantity(item?.id, 1)}
                    >
                      <FiPlus />
                    </button>
                    <span className='text-lg font-semibold'>
                      ₹{item?.price * item?.qty}
                    </span>
                    <button
                      className='text-red-500 py-2 px-3 rounded-lg bg-gray-200 hover:bg-gray-300'
                      onClick={() => removeItem(item?.id)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className='mt-4 flex justify-between items-center'>
              <h3 className='text-xl font-semibold'>
                Total: ₹{calculateTotal()}
              </h3>
            </div>
          </>
        )}
      </div>

      {/* Right: Checkout Form */}
      <div className='checkout-form w-full md:w-2/5 bg-gray-100 p-6 rounded-lg shadow-lg'>
        <h2 className='text-xl font-semibold mb-4'>Checkout</h2>
        <form>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Full Name
            </label>
            <input
              type='text'
              id='name'
              className='w-full p-2 border border-gray-300 rounded-md'
              placeholder='Enter your name'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full p-2 border border-gray-300 rounded-md'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='address'
              className='block text-sm font-medium text-gray-700'
            >
              Address
            </label>
            <input
              type='text'
              id='address'
              className='w-full p-2 border border-gray-300 rounded-md'
              placeholder='Enter your address'
            />
          </div>
          <button
            type='submit'
            className='w-full px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800'
          >
            Complete Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
