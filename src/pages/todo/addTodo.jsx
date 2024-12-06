import { useState, useEffect } from 'react';

const AddTodo = ({ onAddTask, onUpdateTask, taskToEdit }) => {
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskText(taskToEdit.text); // Populate input if editing
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      if (taskToEdit) {
        onUpdateTask(taskText); // Update the task if editing
      } else {
        onAddTask(taskText); // Add new task if not editing
      }
      setTaskText(''); // Reset input
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <input
        type='text'
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder={taskToEdit ? 'Edit task' : 'Add a new task'}
        className='w-2/3 p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
      />
      <button
        type='submit'
        className='ml-4 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400'
      >
        {taskToEdit ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default AddTodo;
