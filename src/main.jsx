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
import PetDetails from './component/pet Listen/PetD';
import PetCard from './component/pet Listen/PetCard';
import PetDonate from './component/pet Listen/PetDonate';
import DonateD from './component/pet Listen/DonateD';
import Register from './component/signin&up/Register';

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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/pet",
        element: <PetListing></PetListing>,
      },
      {
        path: "/pet/:id",
        element: <PetDetails></PetDetails>
      },
      {
        path: "/petCard",
        element: <PetCard></PetCard>
      },
      {
        path: "/petDonate",
        element: <PetDonate></PetDonate>
      },
      {
        path: "/petcard/:id",
        element: <DonateD></DonateD>
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
