import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import GoogleSignIn from "../../Component/GoogleSignIn";




const Login = () => {
const{signIn} = useContext(AuthContext)
const navigate = useNavigate()
const location= useLocation()

const from = location.state?.from?.pathname || '/' ;

console.log('state in the location login page', location.state);
    const handleLogin=e=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            const user = result.user
            console.log(user);
            
            Swal.fire({
                title: "User Logged In Successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              navigate(from, { replace:true });
              
        })
    }
   
    return (
       <>
       <Helmet><title>Paladium Awatis | Login</title> </Helmet>
       <div className="  min-h-screen bg-base-200 pt-20 mb-20">
      
          <div className="  flex-col items-center lg:flex-row-reverse md:flex-row-reverse flex text-black justify-center gap-10 mt-24">
          
          <div className="">
         <img className="w-full h-96" src="https://i.ibb.co/C9DG5ZF/6333204.jpg" alt=""/>
          </div>
          <div className="relative w-2/3 mt-24 flex flex-col mb-10  text-red-500 bg-zinc-800 shadow-md lg:w-96 md:w-96 lg:mx-0 md:mx-0 mx-auto  rounded-xl bg-clip-border">

 <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-red-500 shadow-lg h-28 place-items-center rounded-xl bg-black bg-clip-border shadow-red-500/40">
   <h3 className="block  text-red-500 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal ">
     Sign In
   </h3>
 </div>
<form onSubmit={handleLogin}>
<div className="flex flex-col gap-4 p-6">
<div className="relative h-11 w-full min-w-[200px]">

<input type="email" name="email"
className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
placeholder=" "
/>
<label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
Email
</label>
</div>
<div className="relative h-11 w-full min-w-[200px]">
<input
type="password" name="password"
className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
placeholder=" "
/>
<label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
Password
</label>
</div>

</div>
<div className="p-6 pt-0">


<input className="block w-full select-none rounded-lg bg-gradient-to-tr from-red-700 to-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit" name="" value="Login"/>
</div>
</form>
 
   <p className="flex justify-center pb-6 mt-6 font-sans text-sm antialiased font-light leading-normal text-red-200 text-inherit">
     Don't have an account?
     <Link
       to='/register'
       className="block  ml-1 font-sans text-sm antialiased font-bold leading-normal underline text-red-500"
     >
       Sign up
     </Link>
   </p>
   <h1 className="font-bold text-xl text-center text-red-400">  Sign In With</h1>
   <GoogleSignIn></GoogleSignIn>
</div>
          </div>
       </div>
       </>
    );
};

export default Login;