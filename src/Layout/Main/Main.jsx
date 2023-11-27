import { Outlet, useLocation } from "react-router-dom";

import { FooterWithSocialLinks } from "../../Shared/Footer/FooterWithSocialLinks";
import Navbar from "../../Shared/Navbar/Navbar";



const Main = () => {
    const location = useLocation()
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login')|| location.pathname.includes('register')
    return (
        <div>
        { noHeaderFooter || <Navbar></Navbar>}
        <div className="pt-30  min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
        </div>
        {noHeaderFooter ||  <FooterWithSocialLinks></FooterWithSocialLinks>}
       
        </div>
    );
};

export default Main;