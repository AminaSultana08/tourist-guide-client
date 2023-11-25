import { Outlet } from "react-router-dom";
import  { ComplexNavbar } from "../../Shared/Navbar/ComplexNavbar";
import { FooterWithSocialLinks } from "../../Shared/Footer/FooterWithSocialLinks";



const Main = () => {
    return (
        <div>
        <ComplexNavbar></ComplexNavbar>
        <div className="pt-30  min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
        </div>
        <FooterWithSocialLinks></FooterWithSocialLinks>
       
        </div>
    );
};

export default Main;