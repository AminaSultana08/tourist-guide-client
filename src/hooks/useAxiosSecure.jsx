import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const{logOut} = useAuth()
    //req interceptor to add authorization header for every secure api 
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        //console.log('req stopped by interceptors',token);
        config.headers.authorization= `Bearer ${token}`
        return config;
    }, function(error){
        return Promise.reject(error)
    } );
    //intercept 401 & 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async(error)=>{
        const status = error.response.status
       // console.log('status error in the interceptors', status);
        //401 or 403 status to logout the users and move  the user to login
        if(status ===401 || status ===403){
            await logOut()
            navigate('/login')

        }

        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;