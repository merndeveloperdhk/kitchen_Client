import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/MainLayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Order from "./Order/Order";
import LogIn from "../Components/Login/LogIn";
import Register from "../Components/Register/Register";
import FormicRegister from "../Components/Register/FormicRegister";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../Components/Dashboard/Dashboard";
import Cart from "../Components/Dashboard/Cart";
import UserHome from "../Components/Dashboard/UserHome";
import Reservation from "../Components/Dashboard/Reservation";
import Review from "../Components/Dashboard/Review";
import MyBooking from "../Components/Dashboard/MyBooking";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:`/order/:category`,
          element:<Order></Order>
        },
        {
          path:'/carts',
          element:<PrivateRoute><ShoppingCart></ShoppingCart></PrivateRoute>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/formicRegister',
          element:<FormicRegister></FormicRegister>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard/dCart',
          element:<Cart></Cart>
        },
        {
          path:'/dashboard/userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'/dashboard/reservation',
          element:<Reservation></Reservation>
        },
        {
          path:'/dashboard/review',
          element:<Review></Review>
        },
        {
          path:'/dashboard/myBooking',
          element:<MyBooking></MyBooking>
        }
      ]
    }
  ]);

const Routes = () => {
    return (
        <div>
            
        </div>
    );
};

export default Routes;