import { useState } from 'react';

import Swal from 'sweetalert2';

import AddTodo from './addTodo';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this task?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setTasks(tasks.filter((_, i) => i !== index));
        Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
      }
    });
  };

  return (
    <div className='font-sans text-center bg-gray-100 p-6 max-w-lg mx-auto mt-12 rounded-lg shadow-md'>
      <header className='mb-6'>
        <h1 className='text-3xl font-black text-gray-900'>To-Do List</h1>
      </header>
      <AddTodo onAddTask={addTask} />
      {tasks.length > 0 ? (
        <table className='w-full text-left bg-white shadow-md rounded-lg'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='px-4 py-2'>#</th>
              <th className='px-4 py-2'>Task</th>
              <th className='px-4 py-2 text-center'>Mark as Completed</th>
              <th className='px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                key={index}
                className={`${
                  task.completed ? 'bg-gray-200 line-through text-gray-500' : ''
                }`}
              >
                <td className='px-4 py-2'>{index + 1}</td>
                <td className='px-4 py-2'>{task.text}</td>
                <td className='px-4 py-2 text-center'>
                  {/* Checkbox to Mark as Completed */}
                  <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={() => toggleTask(index)}
                    className='form-checkbox h-5 w-5 text-green-500'
                  />
                </td>
                <td className='px-4 py-2'>
                  <button
                    onClick={() => deleteTask(index)}
                    className='px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-gray-600'>No tasks yet. Start adding some!</p>
      )}
    </div>
  );
};

export default TodoList;