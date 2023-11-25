import { Helmet } from "react-helmet";
import Title from "../../Component/Title/Title";
import OurPackages from "../Home/Home/TravelGuide/OurPackages/OurPackages";


const AllPackages = () => {
    return (
        <div>
        <Helmet><title>Paladium Awatis | All Packages</title> </Helmet>
            <div className="pt-20">
                <Title heading={"Packages"} subHeading='Our'></Title>

            </div>
        </div>
    );
};

export default AllPackages;