import { useState } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './app.route';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
