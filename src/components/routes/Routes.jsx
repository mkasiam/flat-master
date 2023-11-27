import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Apartments from "../pages/Apartments/Apartments/Apartments";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/LogIn/LogIn";
import NotFound from "../pages/NotFound/NotFound";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartment",
        element: <Apartments></Apartments>,
        loader: () => fetch("http://localhost:5000/apartmentCount")
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
