import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import avatar from '../../assets/users/avatar.jpg'
//import {  } from "react-icons/io";
// import { FiMenu } from "react-icons/fi";
import { FaBars } from 'react-icons/fa';
import { IoLogOutOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
const NavbarMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const{user, logOut} = useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{} )
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="relative ">
            <div onClick={()=>setIsOpen(!isOpen)} className="p-2 md:py-2 md:px-2 flex flex-row items-center gap-2 rounded-full  hover:shadow-md transition">
            
         <FaBars className="text-red-500 lg:text-lg md:text-3xl " />
         <div>
         <img
         className='rounded-full xl:w-20 xl:h-20 lg:w-20 lg:h-12 md:w-20 md:h-12 sm:w-10 sm:h-10 w-8 h-8  border-red-800 border-[2px]'
         referrerPolicy='no-referrer'
         src={user && user.photoURL ? user.photoURL : avatar}
         alt='profile'
        
       />
         </div>

            </div>
            {
                isOpen && <div className="absolute px-3 bg-black p-3">
                <div className="flex flex-col cursor-pointer">
                  <div className="md:hidden block ">
                  <ul className="flex  flex-col gap-2 pb-2  ">
                  <li><NavLink to='/' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }>Home</NavLink> </li>
                  <li><NavLink to='/community' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }>Community</NavLink> </li>
                  <li><NavLink to='/blogs' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }>Blogs</NavLink> </li>
                  <li><NavLink to='/about' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }>About Us</NavLink> </li>
                  <li><NavLink to='/contact' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                }>Contact Us</NavLink> </li>
                  {
                    user ?<>
                    
                     </> : <><li><Link to='/login'>Login</Link> </li></>
                 }
                  </ul>
                  </div>
                  {
                    user ?<>
                    <span className="pb-1">{user?.displayName} </span>
                    <span  className="pb-1">{user?.email} </span>
                     </> : ''
                 }
                    <Link to='/dashboard' className="text-red-500  pb-1">Dashboard</Link>
                    <Link > <button onClick={handleLogOut} className="btn flex justify-center items-center gap-1 text-red-500" type=""><IoLogOutOutline className="text-lg"/> LogOut</button></Link>
                </div>
                </div>
            }
        </div>
    );
};

export default NavbarMenu;