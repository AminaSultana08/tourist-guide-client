import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import AllPackages from "../Pages/AllPackages/AllPackages";
import PackageDetails from "../Pages/Home/Home/TravelGuide/OurPackages/PackageDetails/PackageDetails";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";


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
                element:<PackageDetails></PackageDetails>
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
    }
])

export default router;