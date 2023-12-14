import { Link, useSearchParams } from "react-router-dom";
import Title from "../../../../Component/Title/Title";
import TourTypeBox from "./TourTypeBox";
import { tourTypes } from "./TourTypes";





const TourType = () => {
  const [params, setParams] = useSearchParams()
  const tourType = params.get('tour_type')
  console.log(tourType);
    return (

        <div className="py-10  max-w-4xl   mx-auto">
        <Title subHeading='Tour'  heading=' Types' ></Title>

            <div className="flex  flex-row overflow-x-auto justify-between items-center pt-4 gap-4  ">
              {
                tourTypes.map(item =><TourTypeBox key={item.label} label={item.label} icon={item.icon}
                  selected= {tourType==item.label}
                  ></TourTypeBox> )
               }
            </div>
           
        </div>
    );
};

export default TourType;