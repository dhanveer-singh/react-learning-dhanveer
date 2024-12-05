import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfileDetails from './pages/profile/profileDetails.jsx'
import CommonLayout from './layouts/commonLayout.jsx'
import TodoList from './pages/todo/todoList.jsx'
import Counter from './pages/counter/counter.jsx'

const userData = {
  name: "Dhanveer Singh",
  age: 30,
  location: "Mohali",
  image: "https://via.placeholder.com/150",
}

const router = createBrowserRouter([
  {
    element: <CommonLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/profile",
        element: <ProfileDetails userData={userData} />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/todolist",
        element: <TodoList />,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
