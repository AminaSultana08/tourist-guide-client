

import { useNavigate } from 'react-router-dom';
import '../Component/Button/btn.css'
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';
const GoogleSignIn = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user)
            const userInfo ={
                email:result.user?.email,
                name:result.user?.displayName,
                photoURL:result.user?.photoURL
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
            ;
            
        })
        .catch(error=>console.log(error))

    }
    return (
        <div>
       <div className='flex items-center justify-center'>
       <hr className="my-2 w-1/2 text-center pb-5 border-red-300"  role="menuitem" />
        
        <hr className="my-2 border-red-pink-50"  role="menuitem" />
       </div>
            <div className="flex justify-center items-center ">


                <button onClick={handleGoogleSignIn} className="button-82-pushable mb-5 flex items-center justify-center" role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text-sm  flex items-center justify-center">
                         Google
                    </span>
                </button>


            </div>
        </div>
    );
};

export default GoogleSignIn;