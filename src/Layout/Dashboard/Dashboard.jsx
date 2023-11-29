import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../Component/Logo";
import { BsClipboard2HeartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import useWishList from "../../hooks/useWishList";
import { MdManageAccounts, MdOutlineAssignmentTurnedIn, MdPostAdd } from "react-icons/md";


const Dashboard = () => {
    const [wishList] = useWishList()
    //get admin value from database
    const isAdmin = true;

    //get touristGuide value from databsse
    const isTourGuide = false

    return (

        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-zinc-700 ">
                <Logo></Logo>
                <div className="flex items-center justify-center mt-10 ">
                    <ul className="menu text-lg text-red-500 font-bold  flex flex-col gap-10 ">
                    {
                        isAdmin ? <>
                        <li className="w-full"><NavLink to='/dashboard/adminProfile' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><BsFillPersonFill className="text-red-500 " /> My Profile</NavLink> </li>
                        <li className="w-full"><NavLink to='/dashboard/addPackage' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><MdPostAdd className="text-red-500 " />Add Package</NavLink> </li>
                        <li className="w-full"><NavLink to='/dashboard/manageUser' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><MdManageAccounts className="text-red-500 " />Manage Users</NavLink> </li>

                        </> : isTourGuide? <>
                        <li className="w-full"><NavLink to='/dashboard/tourGuideProfile' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><BsFillPersonFill className="text-red-500 " /> My Profile</NavLink> </li>
                        <li className="w-full"><NavLink to='/dashboard/assignedTours' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><MdOutlineAssignmentTurnedIn className="text-red-500 " />My Assigned Tours</NavLink> </li>
                        

                        </> : <>
                        <li className="w-full"><NavLink to='/dashboard/userProfile' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><BsFillPersonFill className="text-red-500 " /> My Profile</NavLink> </li>
                        <li className="w-full"><NavLink to='/dashboard/myBookings' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><FaBook className="text-red-500 " /> My Bookings</NavLink> </li>
                        <li className="w-full"><NavLink to='/dashboard/myWishList' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><BsClipboard2HeartFill className="text-red-500 " /> My Wish List ({wishList.length}) </NavLink> </li>
                        </>
                    }
                        {/* <li className="w-full"><NavLink to='/dashboard/myProfile' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><BsFillPersonFill className="text-red-500 " /> My Profile</NavLink> </li>
                        <li className="w-full"><NavLink to='/dashboard/myBookings' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><FaBook className="text-red-500 " /> My Bookings</NavLink> </li>
                        <li className="w-full"><NavLink to='/dashboard/myWishList' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><BsClipboard2HeartFill className="text-red-500 " /> My Wish List ({wishList.length}) </NavLink> </li> */}


                        { /* shared nav link */}
                        <div className='flex items-center justify-center'>
                            <hr className="my-2 w-1/2 text-center pb-5 border-red-300" role="menuitem" />

                            <hr className="my-2 border-red-pink-50" role="menuitem" />
                        </div>
                        <li className="w-full"><NavLink to='/' className="flex items-center gap-1 hover:bg-red-200 p-3 rounded-lg bg-red-100 "><FaHome className="text-red-500" /> My Home</NavLink> </li>

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