import { useLoaderData } from "react-router-dom";
import Gallery from "./Gallery/Gallery";
import TourGuide from "./TourGuide/TourGuide";
import Booking from "./Booking/Booking";



const PackageDetails = () => {
    const packageDetails = useLoaderData()
    const{image,day1_description,day1_tourPlan , day2_description,day2_tourPlan,price,title,tour_type} = packageDetails
    
    return (

        <div className="pt-28 bg-zinc-800">
        
             
            <Gallery></Gallery>
            <div className="bg-zinc-800 p-10">
            <div className="lg:max-w-2xl md:max-w-2xl max-w-lg  mx-auto p-10 my-16 text-red-400 border-2 border-red-700 shadow-2xl shadow-red-700 dark:bg-gray-900 dark:text-gray-100">
	
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 lg:h-80 md:h-80 dark:bg-gray-500" />
                    <div className="flex gap-5 items-center lg:justify-between md:justify-between justify-evenly text-xs">
                        <p className="text-lg">{price}tk</p>
                        <p className="leadi  dark:text-gray-400 text-lg ">{title} </p>
                    </div>
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl text-center font-semibold dark:text-violet-400">{tour_type} </h3>
                    </a>
                   
                </div>
            </div>
        </div>
            </div>

            <div className="my-16 py-16">
                <div>
                    <h1 className="text-red-600 font-bold text-center text-4xl">Tour Plan</h1>
                </div>
                <div className=" flex flex-col gap-10  py-5 px-10">
                    <div>
                        <h1 className="text-2xl text-red-500 ">{day1_tourPlan} </h1>
                        <p className="text-lg text-red-400">{day1_description} </p>
                    </div>
                    <div>
                    <h1 className="text-2xl text-red-500">{day2_tourPlan} </h1>
                    <p className="text-lg text-red-400" >{day2_description} </p>
                    </div>
                </div>
            </div>
            <TourGuide></TourGuide>
            <Booking></Booking>
            
        </div>
    );
};

export default PackageDetails;