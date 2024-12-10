import { useContext } from 'react';

import { ProductsContext } from '@/context/productsContext';


const Products = () => {
  // const [qty, setQty] = useState(0);
  const productContext = useContext(ProductsContext);
  const {count, setCount} = productContext;
  return (
    <div className='max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <img
          className='rounded-t-lg'
          src='https://flowbite.com/docs/images/blog/image-1.jpg'
          alt='Product'
        />
      </a>
      <div className='p-4'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>

        <div className='flex justify-between items-center'>
          <form className='max-w-xs'>
            <div className='relative flex items-center'>
              <button
                type='button'
                onClick={() => setCount((prev) => prev - 1)}
                disabled={count === 0}
                className='flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
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
                placeholder=''
                value={count}
                required
              />
              <button
                type='button'
                // onClick={() => setQty((prev) => prev + 1)}
                onClick={() => setCount((prev) => prev + 1)}
                className='flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'
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
          <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
