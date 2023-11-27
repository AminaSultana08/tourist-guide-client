import useTourPackages from "../../../../../../../hooks/useTourPackages";
import Img from "./Img";


const Gallery = () => {
    const[tourPackages] = useTourPackages()
    return (
        <div className="grid grid-cols-3">
            {
                tourPackages?.map(item => <Img key={item._id} item={item} ></Img> )
            }
        </div>
    );
};

export default Gallery;