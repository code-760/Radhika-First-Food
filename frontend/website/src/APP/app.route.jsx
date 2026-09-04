import { createBrowserRouter } from 'react-router-dom';
import Register from '../Features/pages/Register';
import Login from '../Features/pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
