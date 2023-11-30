import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
   const {user} = useAuth()
   console.log(user?.email);
   const axiosSecure = useAxiosSecure()
   const {data: isAdmin,isPending:isAdminLoading}= useQuery({
    queryKey:[user?.email, 'isAdmin'],
    

    queryFn: async()=>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        console.log(res.data);
        return res.data?.isAdmin
    }
   })
   return [isAdmin,isAdminLoading]
};

export default useAdmin;

