import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Component/Loader/Loader";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Loader></Loader>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace > </Navigate>
};

export default PrivateRoute;