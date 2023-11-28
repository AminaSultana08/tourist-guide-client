import { Link } from "react-router-dom";
import logo from '../assets/Icon/logo (2).png'

const Logo = () => {
    return (
        <Link to='/'>
            <div className="flex flex-row p-5 justify-center items-center">
                <img width='60' height='60' src={logo} alt="" />
                <p className="text-xl font-bold text-red-500 ">Paladium Awatis</p>
            </div>
        </Link>
    );
};

export default Logo;