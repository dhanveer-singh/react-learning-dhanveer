import { useContext } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductsContext } from '@/context/productsContext';

const ProductCard = ({ product, onAddToCart }) => {
  const { cartItems, updateQuantity } = useContext(ProductsContext);

  const isInCart = cartItems?.some((item) => item?.id === product?.id);
  return (
    <div className='max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden'>
      <a href='#'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true, type: 'bullets' }}
          className='product-slider'
        >
          {product?.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className='rounded-t-lg transform transition-transform duration-300 hover:scale-105'
                src={image}
                alt={`Product Image ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </a>
      <div className='p-4'>
        <p className='text-sm text-gray-700 dark:text-gray-400 mb-1'>
          {new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
          }).format(product?.price)}
        </p>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {product?.title}
          </h5>
        </a>
        <p className='mb-4 font-normal text-gray-700 dark:text-gray-400 line-clamp-4'>
          {product?.description}
        </p>
        <div className='flex justify-between items-center'>
          <form className='max-w-xs'>
            <div className='relative flex items-center'>
              <button
                type='button'
                className='flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                onClick={() => updateQuantity(product?.id, -1)}
              >
                <svg
                  className='w-2.5 h-2.5 text-gray-900 dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 2'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 1h16'
                  />
                </svg>
              </button>
              <input
                type='text'
                className='flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center'
                value={product?.qty}
                readOnly
              />
              <button
                type='button'
                className='flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
                onClick={() => updateQuantity(product?.id, 1)}
              >
                <svg
                  className='w-2.5 h-2.5 text-gray-900 dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 1v16M1 9h16'
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className='flex space-x-2'>
            <button
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={() => onAddToCart({ ...product, product })}
              disabled={isInCart}
            >
              {isInCart ? 'Added' : 'Add To Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
