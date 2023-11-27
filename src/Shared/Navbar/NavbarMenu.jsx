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
            
         <FaBars className="text-red-500 lg:text-lg md:text-5xl " />
         <div>
         <img
         className='rounded-full lg:w-24 border-red-800 border-[2px]'
         referrerPolicy='no-referrer'
         src={user && user.photoURL ? user.photoURL : avatar}
         alt='profile'
         height='100'
         width='100'
       />
         </div>

            </div>
            {
                isOpen && <div className="absolute px-3 bg-black p-3">
                <div className="flex flex-col cursor-pointer">
                  <div className="md:hidden block ">
                  <ul className="flex  flex-col gap-2  ">
                  <li><NavLink to='/'>Home</NavLink> </li>
                  <li><NavLink to='/community' >Community</NavLink> </li>
                  <li><NavLink to='/blogs'>Blogs</NavLink> </li>
                  <li><NavLink to='/about'>About Us</NavLink> </li>
                  <li><NavLink to='/contact'>Contact Us</NavLink> </li>
                  {
                    user ?<>
                    
                     </> : <><li><Link to='/login'>Login</Link> </li></>
                 }
                  </ul>
                  </div>
                  {
                    user ?<>
                    <span>{user?.displayName} </span>
                    <span>{user?.email} </span>
                     </> : <><li><Link to='/login'>Login</Link> </li></>
                 }
                    <Link to='/dashboard' className="text-red-500 ">Dashboard</Link>
                    <Link > <button onClick={handleLogOut} className="btn flex justify-center items-center gap-1 text-red-500" type=""><IoLogOutOutline className="text-lg"/> LogOut</button></Link>
                </div>
                </div>
            }
        </div>
    );
};

export default NavbarMenu;