import { useState } from 'react';

import { Link } from 'react-router-dom';

const Assignments = () => {
  const assignmentData = [
    {
      path: '/profile',
      title: 'Display profile details using props.',
      description:
        'The goal of this assignment is to understand how to pass data between React components using props. You will create a React application where a parent component passes user profile details to a child component for display. This assignment will help you become familiar with the core concept of props and how components interact in a React application.',
      checked: true,
      status: "Completed"
    },
    {
      path: '/counter',
      title: 'Create a Simple Counter by using useState() Hook',
      description:
        'The counter will demonstrate how to manage and update state in a functional component. You will learn how to increment, decrement, and display the counter value, giving you a foundational understanding of state management in React.',
      checked: true,
      status: "Completed"
    },
    {
      path: '/todolist',
      title: 'Create a todo app',
      description:
        'In this assignment, you will create a simple to-do app where you will practice passing data as props from a parent component to its child component. The parent component will manage the state of the to-do list, while the child component will display the individual to-do items. This will help you understand how data flows within a component hierarchy in a React (or similar) application.',
      checked: false,
      status: "Completed"
    },
    {
      path: '/products',
      title: 'Product Listing and Add-to-Cart with useContext()',
      description:
        'Create a product listing with an "Add to Cart" feature to understand useContext for state management. Initially, pass product data and functions as props from the parent to child components. Then, refactor using useContext to avoid prop drilling and manage shared state efficiently. This will help you compare props-based and context-based state management in React.',
      checked: false,
      status: "Completed"
    },
  ];

  // State to track expanded descriptions for each assignment
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the description
  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 justify-center gap-4 m-8'>
      {assignmentData.map((assignment, index) => {
        const isExpanded = expandedIndex === index;
        const previewLength = 100;
        return (
          <Link
            key={index}
            to={assignment.path}
            className='block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
          >
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Assignment {index + 1}: {assignment.title}
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              {isExpanded
                ? assignment.description
                : `${assignment.description.substring(0, previewLength)}...`}
            </p>
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent Link navigation on button click
                toggleDescription(index);
              }}
              className='mt-2 text-blue-500 hover:underline'
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
            <div className='mt-4'>
              <p className='text-sm font-medium'>
                Status:{' '}
                <span
                  className={`${assignment.status === 'Completed'
                    ? 'text-green-600'
                    : assignment.status === 'In Progress'
                      ? 'text-yellow-600'
                      : 'text-gray-600'
                    }`}
                >
                  {assignment.status}
                </span>
              </p>
              {assignment.checked ? (
                <p className='mt-2 text-sm font-medium text-green-600'>
                  ✔ Assignment is checked.
                </p>
              ) : (
                <p className='mt-2 text-sm font-medium text-red-600'>
                  ✘ Assignment is not checked.
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Assignments;
