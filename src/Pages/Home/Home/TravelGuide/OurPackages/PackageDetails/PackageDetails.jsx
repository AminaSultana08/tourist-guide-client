import { useLoaderData } from "react-router-dom";
import Gallery from "./Gallery/Gallery";

import Booking from "./Booking/Booking";
import FAQ from "./TourGuide/faq";
import MeetTourGuide from "../../../MeetTourGuide/MeetTourGuide";



const PackageDetails = () => {
    const packageDetails = useLoaderData()
    const{Description,image,day1_description,day1_tourPlan , day2_description,day2_tourPlan,day3_description,day3_tourPlan,price,title,tour_type} = packageDetails
    
    return (

        <div className="pt-28 bg-red-50">
        
             
            <Gallery></Gallery>
            <div className="bg-red-50 p-10">
            <div className="lg:max-w-2xl md:max-w-2xl max-w-lg  mx-auto p-10 my-16 text-red-400 border-2 border-red-700 shadow-2xl shadow-red-700 dark:bg-gray-900 dark:text-gray-100">
	
            <div className="space-y-4 text-black">
                <div className="space-y-2">
                    <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 lg:h-80 md:h-80 dark:bg-gray-500" />
                    <div className="flex  gap-5 items-center lg:justify-between md:justify-between justify-evenly text-xs">
                        <p className="text-lg">{price}tk</p>
                        <p className="leadi  dark:text-gray-400 text-lg ">{tour_type} </p>
                    </div>
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl text-center font-semibold dark:text-violet-400">{title}</h3>
                    </a>
                   <h1>{Description} </h1>
                </div>

            </div>
        </div>
            </div>

            <div className="my-16 py-16">
                <div className="bg-red-50 p-4 pb-6">
                    <h1 className="text-red-600 font-bold pb-4 text-center text-4xl">Tour Plan</h1>
                    <FAQ packageDetails={packageDetails}></FAQ>
                </div>
               
            </div>
            <MeetTourGuide></MeetTourGuide>
          
            <Booking packageDetails={packageDetails} ></Booking> 
            
        </div>
    );
};

export default PackageDetails;