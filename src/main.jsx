import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './component/Register';
import Login from './component/Login';
import Maine from './Maine';
import Home from './component/Home/Home';
import PetListing from './component/pet Listen/PetListing';
import PetDetails from './component/pet Listen/PetD';
import PetCard from './component/pet Listen/PetCard';
import PetDonate from './component/pet Listen/PetDonate';
import DonateD from './component/pet Listen/DonateD';
import AuthProvider from './component/Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Maine></Maine>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/pet",
        element: <PetListing></PetListing>
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
        element: <PetDonate></PetDonate>,
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
