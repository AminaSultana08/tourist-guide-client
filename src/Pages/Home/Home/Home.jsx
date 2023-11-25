import { Helmet } from "react-helmet";
import Carousel from "./Banner/Carousel";
import TravelGuide from "./TravelGuide/TravelGuide";

const Home = () => {
    return (
        <div>
           <Helmet><title>Paladium Awatis | Home</title> </Helmet>
           <Carousel></Carousel>
           <TravelGuide></TravelGuide>
        </div>
    );
};

export default Home;