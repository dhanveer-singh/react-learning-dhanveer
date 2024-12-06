import { useState } from 'react';

const AddTodo = ({ onAddTask }) => {
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      onAddTask(input);
      setInput('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask();
    }
  };

  return (
    <div className='flex justify-center mb-6'>
      <input
        type='text'
        value={input}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add a new task'
        className='w-2/3 p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
      />
      <button
        onClick={addTask}
        className='ml-4 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400'
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
