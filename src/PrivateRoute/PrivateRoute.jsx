import { Navigate } from "react-router-dom";
import useAuth from "../Components/hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    if(loading){
        return <p>L<span className="text-xl ">O</span>ading</p>
    }
    if(user){
        return children
    }

    return <Navigate to='/'></Navigate>
};

export default PrivateRoute;