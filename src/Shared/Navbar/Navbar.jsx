import { Link, NavLink } from "react-router-dom";
//import Container from "../Container";
import logo from '../../assets/Icon/logo (2).png'
import NavbarMenu from "./NavbarMenu";
import Container from "../Container";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useWishList from "../../hooks/useWishList";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [wishList] = useWishList()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
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
                                <img width='60' height='60' src={logo} alt="" />
                                <p className="text-xl ">Paladium Awatis</p>
                            </div>
                        </Link>
                        <div className="hidden md:block ">
                            <ul className="flex  flex-row lg:gap-5 md:gap-3  lg:text-lg md:text-xs  ">
                                <li><NavLink to='/' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                              } >
                                Home</NavLink> </li>
                                <li><NavLink to='/community' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                              }>
                                Community</NavLink> </li>
                                <li><NavLink to='/blogs' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                              }>
                                Blogs</NavLink> </li>
                                <li><NavLink to='/about' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                              }>About Us</NavLink> </li>
                                <li><NavLink to='/contact' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                              }>Contact Us</NavLink> </li>
                                <li><Link to='/dashboard/myWishList' className=" ">
                                    <button className="btn flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                  </svg>
                                        <div className="badge">+{wishList.length}</div>
                                    </button>
                                </Link> </li>


                                {
                                    user ? <> <button onClick={handleLogOut} className="btn flex justify-center items-center gap-1 text-red-500" type=""> LogOut</button></> : <><li><Link to='/login'>Login</Link> </li></>
                                }
                            </ul>
                        </div>
                        <NavbarMenu />
                    </div>

                </Container>

            </div>
        </div>
    );
};

export default Navbar;