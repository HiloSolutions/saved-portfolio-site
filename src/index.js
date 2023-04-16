import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router-dom';
import CreateRouter from './routes/router';
import "./index.css";
//require('dotenv').config()



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    { <RouterProvider router={CreateRouter} /> }
  </React.StrictMode>,
)
