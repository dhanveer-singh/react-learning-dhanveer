import { useState, useEffect } from 'react';

const AddTodo = ({ handleTask, taskToEdit, editIndex }) => {
  const [taskText, setTaskText] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    if (taskToEdit) {
      setTaskText(taskToEdit?.text || '');
      setDepartment(taskToEdit?.department || '');
      setStatus(taskToEdit?.status || 'Pending');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      const newTask = {
        text: taskText,
        department,
        status,
      };
      handleTask(newTask, editIndex);

      // Reset form fields
      setTaskText('');
      setDepartment('');
      setStatus('Pending');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <div className='grid grid-cols-4 gap-4 mb-4'>
        {/* Task Input - Full Width */}
        <div>
          <input
            type='text'
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder={taskToEdit ? 'Edit task' : 'Add a new task'}
            className='w-full p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>

        {/* Department Input */}
        <div>
          <input
            type='text'
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder='Department'
            className='w-full p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>

        {/* Status Dropdown */}
        <div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className='w-full p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          >
            <option value='Pending'>Pending</option>
            <option value='In Progress'>In Progress</option>
            <option value='Completed'>Completed</option>
          </select>
        </div>

        {/* Submit Button - Full Width */}
        <button
          type='submit'
          className='w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400'
        >
          {taskToEdit ? 'Update Task' : 'Add Task'}
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
