import { Link } from 'react-router-dom';

const Assignments = () => {
  const assignmentData = [
    {
      path: '/profile',
      title: 'Assignment 1: Display profile details using props.',
      description:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      checked: true,
    },
    {
      path: '/counter',
      title:
        'Assignment 2: Counter Increment / Decrement using useState() hook',
      description:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      checked: true,
    },
    {
      path: '/todolist',
      title: 'Assignment 3: Todo',
      description:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      checked: false,
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 justify-center gap-4 mx-8'>
      {assignmentData.map((assignment, index) => (
        <Link
          key={index}
          to={assignment.path}
          className='block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
        >
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {assignment.title}
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            {assignment.description}
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
        </Link>
      ))}
    </div>
  );
};

export default Assignments;
