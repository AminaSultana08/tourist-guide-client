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
                loader:({params})=>fetch(`http://localhost:5000/packages/${params.id}`)
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
                element:<ManageUsers></ManageUsers>
            },
            {
                path:'addPackage',
                element:<AddPackage></AddPackage>
            }
        ]
    }
])

export default router;