import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/MainLayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Order from "./Order/Order";
import LogIn from "../Components/Login/LogIn";
import Register from "../Components/Register/Register";
import FormicRegister from "../Components/Register/FormicRegister";

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
  ]);

const Routes = () => {
    return (
        <div>
            
        </div>
    );
};

export default Routes;