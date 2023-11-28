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
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'myWishList',
                element:<MyWishList></MyWishList>
            }
        ]
    }
])

export default router;