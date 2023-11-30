import { Helmet } from "react-helmet";
import Carousel from "./Banner/Carousel";
import TravelGuide from "./TravelGuide/TravelGuide";
//import TourType from "./TourType/TourType";

const Home = () => {
    return (
        <div className="bg-red-100">
           <Helmet><title>Paladium Awatis | Home</title> </Helmet>
           <Carousel></Carousel>
           <TravelGuide></TravelGuide>
          
        </div>
    );
};

export default Home;