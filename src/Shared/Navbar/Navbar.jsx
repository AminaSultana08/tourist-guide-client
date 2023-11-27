import { Link, NavLink } from "react-router-dom";
//import Container from "../Container";
import logo from '../../assets/Icon/logo (2).png'
import NavbarMenu from "./NavbarMenu";
import Container from "../Container";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{} )
        .catch(error=>{
            console.log(error);
        })
    }
    return (
      <div className="fixed  bg-black text-red-500 rounded-md z-10 max-w-full  shadow-md">
        <div className="py-4 border-b[1px">
         
        <Container>
        <div className="flex flex-row justify-between items-center md:gap-20 gap-10">
        <Link to='/'>
        <div className="flex flex-row gap-2 justify-between items-center">
        <img  width='60' height='60' src={logo} alt=""/>
        <p className="text-xl ">Paladium Awatis</p>
        </div>
        </Link>
        <div className="hidden md:block ">
           <ul className="flex  flex-row gap-2  ">
           <li><NavLink to='/'>Home</NavLink> </li>
           <li><NavLink to='/community' >Community</NavLink> </li>
           <li><NavLink to='/blogs'>Blogs</NavLink> </li>
           <li><NavLink to='/about'>About Us</NavLink> </li>
           <li><NavLink to='/contact'>Contact Us</NavLink> </li>
          
           {
            user ?<> <button onClick={handleLogOut} className="btn flex justify-center items-center gap-1 text-red-500" type=""> LogOut</button></> : <><li><Link to='/login'>Login</Link> </li></>
         }
           </ul>
        </div>
        <NavbarMenu/>
     </div>
     
        </Container>
        
        </div>
      </div>
    );
  };
  
  export default Navbar;