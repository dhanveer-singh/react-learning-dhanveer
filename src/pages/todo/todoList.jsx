import { useState } from 'react';

import AddTodo from './addTodo';
import DeleteConfirmation from '@/components/dialog/deleteConfirmation';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // This function will handle both functionality of add task and update task
  const handleTask = (taskData, editIndex = null) => {
    if (editIndex === null) {
      setTasks([...tasks, { ...taskData, completed: false }]);
    } else {
      const updatedTask = [...tasks];
      updatedTask[editIndex] = { ...updatedTask[editIndex], ...taskData };
      setTasks(updatedTask);
      setEditIndex(null);
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className='font-sans text-center bg-gray-100 p-6 max-w-xxl mx-auto mt-12 rounded-lg shadow-md'>
      <header className='mb-6'>
        <h1 className='text-3xl font-black text-gray-900'>To-Do List</h1>
      </header>

      <AddTodo
        handleTask={handleTask}
        taskToEdit={editIndex !== null ? tasks[editIndex] : null}
        editIndex={editIndex}
      />

      <table className='w-full text-left bg-white shadow-md rounded-lg'>
        <thead>
          <tr className='bg-gray-300'>
            <th className='px-4 py-2'>#</th>
            <th className='px-4 py-2'>Task</th>
            <th className='px-4 py-2'>Department</th>
            <th className='px-4 py-2'>Status</th>
            <th className='px-4 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <tr
                key={index}
                className={`${
                  task?.status === 'Completed'
                    ? 'bg-gray-200 line-through text-gray-500'
                    : ''
                }`}
              >
                <td className='px-4 py-2'>{index + 1}</td>
                <td className='px-4 py-2'>{task?.text}</td>
                <td className='px-4 py-2'>{task?.department}</td>
                <td className='px-4 py-2'>{task?.status}</td>
                <td className='px-4 py-2'>
                  <button
                    onClick={() => {
                      setEditIndex(index);
                    }}
                    disabled={task?.status === 'Completed'}
                    className='px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                  >
                    Edit
                  </button>
                  <DeleteConfirmation
                    onConfirmDelete={deleteTask} // Pass the delete function
                    taskIndex={index} // Pass the task index
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className='text-gray-600 text-center py-4' colSpan={6}>
                No tasks yet. Start adding some!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
