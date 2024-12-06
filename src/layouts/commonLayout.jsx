import { Outlet } from 'react-router-dom';

import NavBar from '@/components/navBar';

const CommonLayout = () => {
  return (
    <>
      <NavBar />
      <div className='mt-20 max-w-screen-xl mx-auto'>
        <h1 className='my-8 text-3xl font-extrabold leading-none tracking-light text-gray-900 text-center'>
          React Learning Assignments
        </h1>
        <Outlet />
      </div>
    </>
  );
};

export default CommonLayout;
