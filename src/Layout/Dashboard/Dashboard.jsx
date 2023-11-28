import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../Component/Logo";
import { BsClipboard2HeartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import useWishList from "../../hooks/useWishList";
const Dashboard = () => {
    const [wishList] = useWishList()
    return (

        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-zinc-700">
                <Logo></Logo>
                <div className="flex items-center justify-center mt-10 ">
                <ul className="menu text-lg text-red-500 font-bold  flex flex-col gap-10 ">
                <li className="w-full"><NavLink to='/dashboard/myProfile' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><BsFillPersonFill className="text-red-500 "  /> My Profile</NavLink> </li>
                <li className="w-full"><NavLink to='/dashboard/myBookings' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><FaBook className="text-red-500 "  /> My Bookings</NavLink> </li>
                <li className="w-full"><NavLink to='/dashboard/myWishList' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><BsClipboard2HeartFill className="text-red-500 "  /> My Wish List ({wishList.length}) </NavLink> </li>
                <div className="divider divide-x  divide-red-700"></div>
                <li className="w-full"><NavLink to='/' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><FaHome className="text-red-500"/> My Home</NavLink> </li>

            </ul>
                </div>
            </div>

            {/* dashboard content */}

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;