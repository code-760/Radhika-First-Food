import { createBrowserRouter } from 'react-router-dom';
import Register from '../Features/Auth/pages/Register';
import Login from '../Features/Auth/pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element:<h1>home pages</h1>,
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
