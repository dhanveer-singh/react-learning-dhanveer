import { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask();
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className='font-sans text-center bg-gray-100 p-6 max-w-lg mx-auto mt-12 rounded-lg shadow-md'>
      <header className='mb-6'>
        <h1 className='text-3xl font-black text-gray-900'>To-Do List</h1>
      </header>
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
      <ul className='space-y-4'>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md cursor-pointer ${
              task.completed
                ? 'bg-gray-200 line-through text-gray-500'
                : 'bg-white'
            }`}
          >
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button
              onClick={() => deleteTask(index)}
              className='px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
