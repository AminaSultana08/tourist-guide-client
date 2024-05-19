import { Link } from "react-router-dom";
import logo from '../assets/Icon/logo (2).png'

const Logo = () => {
    return (
        <Link to='/'>
            <div className="flex flex-row p-5 justify-center items-center">
                <img className=" xl:w-24 lg:w-24 md:w-20 w-16" src={logo} alt="" />
                <p className="xl:text-xl lg:text-xl md:text-sm text-base font-bold text-red-500 ">Paladium Awatis</p>
            </div>
        </Link>
    );
};

export default Logo;