import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center min-h-[300px] bg-gray-100'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>Counter</h1>
      <div className='text-5xl font-bold text-gray-900 mb-6'>{count}</div>
      <div className='flex gap-4'>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          disabled={count <= 0}
          className={`px-6 py-2 text-white rounded-md shadow-md ${
            count <= 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          -
        </button>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className='px-6 py-2 text-white bg-green-500 rounded-md shadow-md hover:bg-green-600'
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
