import Title from "../../../../../../../Component/Title/Title";
import useTourPackages from "../../../../../../../hooks/useTourPackages";
import Img from "./Img";


const Gallery = () => {
    const[tourPackages] = useTourPackages()
    return (
        <div>
        <h1 className="text-white" ><Title subHeading='Our' heading='Gallery' ></Title> </h1>
        <div className="grid grid-cols-3">
        
        {
            tourPackages?.map(item => <Img key={item._id} item={item} ></Img> )
        }
    </div>
        </div>
       
    );
};

export default Gallery;