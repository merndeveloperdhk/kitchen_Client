import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/MainLayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Menu from "../Components/Menu/Menu";
import Order from "./Order/Order";
import LogIn from "../Components/Login/LogIn";
import Register from "../Components/Register/Register";

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
          path:`/order`,
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<Register></Register>
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