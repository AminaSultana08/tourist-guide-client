



import TourPackageCard from '../../../../../Shared/PackageCard/TourPackageCard';
import useTourPackages from '../../../../../hooks/useTourPackages';
import { Link} from 'react-router-dom';


const OurPackages = () => {
    const [tourPackages] = useTourPackages()
   
    

   
    return (
        <div className='mt-3 mb-10 '>
            <div className='mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5'>
           
            
           {
                tourPackages?.slice(0,3). map(item=><TourPackageCard
                    key={item._id}
                    item={item}
                     ></TourPackageCard>)
            } 
            </div>
            <div className='flex justify-center items-center' >
                <Link to='/allPackages'><button  className='btn btn-primary bg-red-600 text-white rounded-xl p-3' >Show All packages</button></Link>
            </div>
        </div>
    );
};

export default OurPackages;