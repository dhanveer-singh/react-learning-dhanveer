import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import CommonLayout from '@/layouts/commonLayout';
import Counter from '@/pages/counter/counter';
import FormValidation from '@/pages/form-validation/formValidation';
import Index from '@/pages/products';
import Cart from '@/pages/products/cart';
import ProfileDetails from '@/pages/profile/profileDetails';
import TodoList from '@/pages/todo/todoList';

const userData = {
  name: 'Dhanveer Singh',
  age: 30,
  location: 'Mohali',
  image: 'https://via.placeholder.com/150',
};

const AppRoutes = createBrowserRouter([
  {
    element: <CommonLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/profile',
        element: <ProfileDetails userData={userData} />,
      },
      {
        path: '/counter',
        element: <Counter />,
      },
      {
        path: '/todolist',
        element: <TodoList />,
      },
      {
        path: '/products',
        element: <Index />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/form-validation',
        element: <FormValidation />,
      },
    ],
  },
]);

export default AppRoutes;
