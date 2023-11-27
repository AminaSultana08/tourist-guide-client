import useTourPackages from "../../../../hooks/useTourPackages";
import TourTypeCard from "./TourTypeCard";


const TourType = () => {
    const [tourPackages] = useTourPackages()
    
    const tourType = tourPackages?.filter(item=>item.tour_type ==="History" ) 
    // const Beach = tourPackages?.filter(item=>item.tour_type ==="Beach" ) 
    // const Culinary = tourPackages?.filter(item=>item.tour_type ==="Culinary" ) 
    return (
        <div>
            <div>
              {
                tourType?.map(item=><TourTypeCard key={item._id} item={item} ></TourTypeCard>)
              }
            </div>
        </div>
    );
};

export default TourType;