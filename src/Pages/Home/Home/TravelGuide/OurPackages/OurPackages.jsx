

import { useState } from 'react';
import {  TourPackageCard } from '../../../../../Shared/PackageCard/TourPackageCard';
import useTourPackages from '../../../../../hooks/useTourPackages';
import { Link } from 'react-router-dom';
//import { PackageCard } from '../../../../../Shared/PackageCard/PackageCard';

const OurPackages = () => {
    const [tourPackages] = useTourPackages()
 //const [dataLength , setDataLength] = useState(3)

   
    return (
        <div className='mt-3 mb-10 '>
            <div className='mb-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5'>
           
            
           {
                tourPackages?.slice(0,3). map(item=><TourPackageCard
                    key={item._id}
                    item={item}
                     ></TourPackageCard>)
            } 
            </div>
            <div  >
                <Link to='/allPackages'><button  className='btn btn-primary bg-red-600 text-white rounded-xl p-3' >Show All packages</button></Link>
            </div>
        </div>
    );
};

export default OurPackages;