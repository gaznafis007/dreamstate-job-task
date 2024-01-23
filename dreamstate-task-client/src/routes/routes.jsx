import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home";
import PrimaryLayout from "../Layout/PrimaryLayout/PrimaryLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "../Components/PrivateRoute";
import Ships from "../Components/Ships";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path: '/ships',
        element: <PrivateRoute><Ships></Ships></PrivateRoute>
      }
    ],
  },
]);
