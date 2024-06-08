import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Maine from './Maine';
import AuthProvider from './component/Provider/AuthProvider';
import Login from './component/signin&up/Login';
import PetListing from './component/pet Listen/PetListing';
import PetDetailsModal from './component/pet Listen/PetD';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Maine></Maine>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/pet",
        element: <PetListing></PetListing>,
      },
      {
        path: "/d",
        element: <PetDetailsModal></PetDetailsModal>
      }
     ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
