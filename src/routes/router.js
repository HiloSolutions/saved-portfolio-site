import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import AboutPage from '../pages/AboutPage';

// router.jsx file is the base section where all routes is been created*******
const CreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />
  },
]);
export default CreateRouter;