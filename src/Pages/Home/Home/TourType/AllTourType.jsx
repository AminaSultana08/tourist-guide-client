import { Link, useSearchParams } from "react-router-dom";
import TourPackageCard from "../../../../Shared/PackageCard/TourPackageCard";
import { useEffect, useState } from "react";

const AllTourType = () => {
    const [tourTypePackages, setTourTypePackages] = useState([]);
    const [params, setParams] = useSearchParams();
    const tour_type = params.get('tour_type');

    useEffect(() => {
        fetch('https://tourist-guide-server-five.vercel.app/packages')
            .then(res => res.json())
            .then(data => {
                if (tour_type) {
                    // Fix the property name to tour_type
                    const filtered = data.filter(tourPackage => tourPackage.tour_type === tour_type);
                    setTourTypePackages(filtered);
                } else {
                    setTourTypePackages(data);
                }
                if (tour_type === 'Culinary' || tour_type === 'Cultural') {
                    const filtered = data.filter(tourPackage => tourPackage.tour_type === tour_type);
                    setTourTypePackages(filtered);
                    console.log(filtered);
                } 
               
            });
    }, [tour_type]);

    return (
        <div>
            <div className="max-w-5xl mx-auto mb-5 pb-10">
                <div className='mb-5 max-w-4xl justify-center items-center mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5'>
                    {tourTypePackages?.slice(0, 3).map(item => (
                        <TourPackageCard
                            key={item.tour_id}
                            item={item}
                        />
                    ))}
                </div>
                {tourTypePackages.length > 0 ? (
                    <div className="flex justify-center items-center">
                        <Link to='/allPackages'>
                            <button className='btn btn-primary bg-red-600 text-white rounded-xl p-3'>Show All packages</button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex w-64 bg-white p-5 mx-auto justify-center items-center">
                        
                        <p className="text-2xl font-bold ">No data found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllTourType;
