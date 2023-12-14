import { Helmet } from "react-helmet";
import Carousel from "./Banner/Carousel";
import TravelGuide from "./TravelGuide/TravelGuide";
import TourType from "./TourType/TourType";
import AllTourType from "./TourType/AllTourType";




const Home = () => {
   
    return (
        <div className="bg-red-100 min-h-screen">
           <Helmet><title>Paladium Awatis | Home</title> </Helmet>

           <Carousel></Carousel>
           <TravelGuide></TravelGuide>
           <TourType></TourType>
           <AllTourType></AllTourType>
         
          
        </div>
    );
};

export default Home;