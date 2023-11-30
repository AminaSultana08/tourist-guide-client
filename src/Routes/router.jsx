import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import AllPackages from "../Pages/AllPackages/AllPackages";
import PackageDetails from "../Pages/Home/Home/TravelGuide/OurPackages/PackageDetails/PackageDetails";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyWishList from "../Pages/Dashboard/MyWishList/MyWishList";
import MyBookings from "../Pages/MyBookings/MyBookings";
import MyProfile from "../Pages/MyProfile/MyProfile";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AddPackage from "../Pages/Dashboard/AddPackage/AddPackage";
import TourGuideProfile from "../Pages/Dashboard/TourGuideProfile/TourGuideProfile";
import MyAssignedTour from "../Pages/Dashboard/MyAssignedTour/MyAssignedTour";
import AdminRoute from "./AdminRoute";
import Community from "../Pages/Community/Community";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'packageDetails/:id',
                element:<PrivateRoute><PackageDetails></PackageDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://tourist-guide-server-five.vercel.app/packages/${params.id}`)
            },
            {
                path:'/allPackages',
                element:<AllPackages></AllPackages>

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/community',
                element:<Community></Community>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            }

        ]

    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            //user dashboard
            {
                path:'myWishList',
                element: <PrivateRoute><MyWishList></MyWishList></PrivateRoute>
            },
            {
                path:'myBookings',
                element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path:'myProfile',
                element:<PrivateRoute><MyProfile></MyProfile> </PrivateRoute>
            },
            //admin dashboard
            {
                path:'adminProfile',
                element:<AdminProfile></AdminProfile>
            },
            {
                path:'manageUser',
                element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path:'addPackage',
                element:<AdminRoute><AddPackage></AddPackage></AdminRoute>
            },
            //tour guide
            {
                path:'tourGuideProfile',
                element:<PrivateRoute><TourGuideProfile></TourGuideProfile></PrivateRoute>
            },
            {
                path:'assignedTours',
                element:<PrivateRoute><MyAssignedTour></MyAssignedTour></PrivateRoute>
            }
        ]
    }
])

export default router;