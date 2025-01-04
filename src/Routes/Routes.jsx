import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Orders from "../Pages/Orders";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
import Secret from "../Pages/Secret";
import PrivetRoute from "../Privet/PrivetRoute";
import Dashboard from "../LayOut/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Orders></Orders>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/secret",
        element: (
          <PrivetRoute>
            <Secret></Secret>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // all users
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
