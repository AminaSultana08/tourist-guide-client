import { Helmet } from "react-helmet";
import Title from "../../Component/Title/Title";


const AboutUs = () => {
    return (
        <div className='pt-24 pb-32 bg-red-100 '>
        <Helmet><title>Paladium Awatis | About Us</title> </Helmet>
          <div className="bg-red-100">
          <Title subHeading='About'  heading='us'  ></Title>
          <h1 className="text-4xl text-center font-bold text-red-900">Paladium Awatis</h1> 
          </div>
          <div className="p-4">
          <p className="text-md p-4">Paladium Awatis is the First Online Travel & Tourism Guide of Bangladesh. The site is one stop solution for meeting the total requirements of all kinds of traveler - international and domestic.

          Paladium Awatis.com  committed to support Bangladesh Government as well as the dynamism of the private sector. We are working towards repositioning the image of the country so as to market and promote Bangladesh aggressively and extensively both domestically and internationally.</p>
         <div className="text-md p-4 pt-10">
         <h1 className="text-xl  font-bold text-red-900" >Who We Are</h1>
         <p className="text-md "> Paladium Awatis.com  owned and operated by Discovery Bangladesh - one of the most trusted and reliable tour operators of Bangladesh, run & managed by a team of qualified professionals having years of experience in handling tourist from all around the world.

         We are also very reliable Destination Management Company in Bangladesh. Many tour operators and travel agents choose us to be their handling agent and to book their clientele accomodation etc.
         
         Our Aim is to provide Quality and excellence to our customers promptly and exclusively. All the professionals at Discovery Bangladesh are expart of their trade and each brings with him/her a unique set of experience adding value to the traveler's overall experience of the country.</p>
         </div>
         <div className="text-md p-4 pt-10">
            <h1 className="text-xl  font-bold text-red-900" >What We Offers</h1>
            <p className="text-md ">Discovery Bangladesh offers a wealth of services in the following core areas: corporate travel, leisure travel, incentives, individual and group travel, meetings and seminars, events and destination management.

            Our goal is to provide a high level of service at optimal prices. We try to provide the best tour in the travel industry in terms of tour planning, cost valuations, hotels suggestions and bookings, transportations, travel assistance, tourism information, sightseeing, shopping, multilingual tour guide, special interest tours, air and rail tickets booking etc.</p>
         </div>
         <div className="text-md p-4 pt-10">
            <h1 className="text-xl  font-bold text-red-900">Our Services Comprise of :</h1>
            <p className="text-md ">Bangladesh Tours : Tailor-made, customized for groups & individuals, incentive, educational, business, corporate and professionals.

            Tour Plan : Itineraries - covering all destinations of Bangladesh.
            Special Interest Tours : Bangladesh culture, heritage, tribal tour, rural villages, eco tourism, fairs & festival, sports tour, wildlife and lot more.
          
            
            Travel Assistance : Sightseeing, monument entrances, international speaking guides, car rentals, tour escorts, ticketing -air, road & train, visa & immigration assistance.</p>
         </div>
          </div>
        </div>
    );
};

export default AboutUs;