import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import GoogleSignIn from "../Component/GoogleSignIn";

const Register = () => {
    const { register, handleSubmit,reset,  formState: { errors }, } = useForm()

    const {createUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()


    const onSubmit= (data) => {
        console.log(data)
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser);
            updateUserProfile(data.name,data.photoURL)
            .then(()=>{
               //create user in database
               const userInfo = {
                name:data.name,
                email:data.email,
                photoURL:data.photoURL
               }
               axiosPublic.post('/users',userInfo) 
               .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    console.log('user added to database');
                    reset()
                    Swal.fire({
                        title: "User Created successfully ",
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
                      navigate('/')
                }
               })
                
              } )
            .catch(error =>console.log(error))
            
             
        })
    }

  

    //console.log(watch("example"))
   
    return (
        <>
        <Helmet><title>Paladium Awatis | SignUp</title> </Helmet>
        <div className="  min-h-screen h-screen bg-base-200 pt-20">
        
            <div className="  flex-col lg:flex-row-reverse md:flex-row-reverse flex text-black justify-center gap-10 items-center mt-24">

                <div >
                    <img className="w-full h-96" src="https://i.ibb.co/qmXsbb7/6333213.jpg" alt=""/>
                </div>
                <div className="relative mb-10 w-2/3 mt-24 flex flex-col   text-red-500 bg-zinc-800 shadow-md lg:w-96 md:w-96 lg:mx-0 md:mx-0 mx-auto rounded-xl bg-clip-border">

                    <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-red-500 shadow-lg h-28 place-items-center rounded-xl bg-black bg-clip-border shadow-red-500/40">
                        <h3 className="block  text-red-500 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal ">
                            SignUp
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col h-auto gap-4 p-3">
                            <div className="relative h-11 w-full min-w-[200px]">

                                <input type="text" {...register("name",{ required: true })} name="name"
                                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                {errors.name && <span className="text-red-600 font-bold">Name is required</span>}
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Name
                                </label>
                            </div>
                          
                            <div className="relative h-11 w-full min-w-[200px]">

                                <input type="text" {...register("photoURL",{ required: true })} name="photoURL"
                                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                {errors.photoURL && <span className="text-red-600 font-bold">PhotoURl is required</span>}
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    PhotoURl
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">

                                <input type="email" {...register("email",{ required: true })} name="email"
                                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                {errors.email && <span className="text-red-600 font-bold">Email is required</span>}
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                    type="text" {...register("password", { required: true ,
                                    minLength:6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/, })} name="password"
                                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                {errors.password && <span className="text-red-600 font-bold">Password is required</span>}
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                  )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be 6 characters</p>
                                  )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must have upper case, lower case, number and special characters</p>
                                  )}
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>

                        </div>
                        <div className="p-6 pt-10">


                            <input className="block w-full select-none rounded-lg bg-gradient-to-tr from-red-700 to-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit" name="" value="Sign Up" />
                        </div>
                    </form>

                    <p className="flex justify-center pb-6 mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                        Already have an account?
                        <Link
                            to='/login'
                            className="block ml-1 underline font-sans text-sm antialiased font-bold leading-normal text-red-500"
                        >
                            Login
                        </Link>
                    </p>
                  <h1 className="font-bold text-xl text-center text-red-400">  Sign Up With</h1>
                     <GoogleSignIn></GoogleSignIn>
                </div>
            </div>
        </div>
        </>
        
    );
};



export default Register;