import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../Layout';
import Login from '../Feature/Auth/pages/Login';
import Dashboard from '../Feature/Dashboard/Pages/Dashboard';

// Category Pages
import AddCategory from '../Feature/Category/Pages/AddCategory';
import ViewCategories from '../Feature/Category/Pages/ViewCategories';

// Subcategory Pages
import AddSubcategory from '../Feature/Subcategory/Pages/AddSubcategory';
import ViewSubcategories from '../Feature/Subcategory/Pages/ViewSubcategories';

// Orders Page
import Orders from '../Feature/Orders/Pages/Orders';

// Products Pages
import AddProduct from '../Feature/Products/Pages/AddProduct';
import ViewProducts from '../Feature/Products/Pages/ViewProducts';

// Slider Pages
import AddSlider from '../Feature/Slider/Pages/AddSlider';
import ViewSliders from '../Feature/Slider/Pages/ViewSliders';

// Why Choose Us Pages
import AddWhyChooseUs from '../Feature/WhyChooseUs/Pages/AddWhyChooseUs';
import ViewWhyChooseUs from '../Feature/WhyChooseUs/Pages/ViewWhyChooseUs';

// FAQ Pages
import AddFaq from '../Feature/FAQ/Pages/AddFaq';
import ViewFaqs from '../Feature/FAQ/Pages/ViewFaqs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      // Category routes
      {
        path: 'category/add',
        element: <AddCategory />,
      },
      {
        path: 'category/view',
        element: <ViewCategories />,
      },
      // Subcategory routes
      {
        path: 'subcategory/add',
        element: <AddSubcategory />,
      },
      {
        path: 'subcategory/view',
        element: <ViewSubcategories />,
      },
      // Orders route
      {
        path: 'orders',
        element: <Orders />,
      },
      // Products routes
      {
        path: 'products/add',
        element: <AddProduct />,
      },
      {
        path: 'products/view',
        element: <ViewProducts />,
      },
      // Slider routes
      {
        path: 'slider/add',
        element: <AddSlider />,
      },
      {
        path: 'slider/view',
        element: <ViewSliders />,
      },
      // Why Choose Us routes
      {
        path: 'why-choose-us/add',
        element: <AddWhyChooseUs />,
      },
      {
        path: 'why-choose-us/view',
        element: <ViewWhyChooseUs />,
      },
      // FAQ routes
      {
        path: 'faq/add',
        element: <AddFaq />,
      },
      {
        path: 'faq/view',
        element: <ViewFaqs />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
