// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";

import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"


// const useAuth = () => {
//     const auth = useContext(AuthContext)
//     return auth
// };

// export default useAuth;
const useAuth = ()=>{
    const auth = useContext(AuthContext)
    return auth
};
export default useAuth;