import { Helmet } from "react-helmet";
import Title from "../../Component/Title/Title";
import OurPackages from "../Home/Home/TravelGuide/OurPackages/OurPackages";
import useTourPackages from "../../hooks/useTourPackages";
import { TourPackageCard } from "../../Shared/PackageCard/TourPackageCard";


const AllPackages = () => {
    const [tourPackages] = useTourPackages()
    return (
        <div>
        <Helmet><title>Paladium Awatis | All Packages</title> </Helmet>
            <div className="pt-20">
                <Title heading={"Packages"} subHeading='Our'></Title>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {
                    tourPackages?. map(item=><TourPackageCard
                        key={item._id}
                        item={item}
                         ></TourPackageCard>)
                } 
                </div>

            </div>
        </div>
    );
};

export default AllPackages;