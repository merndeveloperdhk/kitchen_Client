import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <p>L<span className="text-xl ">O</span>ading</p>
    }
    if(user){
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;