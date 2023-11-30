import vdo1 from '../../../../../assets/all video/vdo1.mp4'
import vdo2 from '../../../../../assets/all video/vdo2.mp4'
import vdo3 from '../../../../../assets/all video/vdo3.mp4'
import vdo4 from '../../../../../assets/all video/vdo4.mp4'

const Overview = () => {
    return (
        <div className="grid mt-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-2 md:mx-3 lg:mx-3 gap-3">
            <div>
                <video src={vdo1} width="" height="" controls />
                <h1 className='text-3xl font-bold text-red-700'>Cox's Bazar
                </h1>    
            </div>
            <div>
                <video src={vdo2} width="" height="" controls />
                <h1 className='text-3xl font-bold text-red-700'>Saint Martin
                </h1>    
            </div>
            <div>
                <video src={vdo3} width="" height="" controls />
                <h1 className='text-3xl font-bold text-red-700'>Dhaka
                </h1>    
            </div>
            <div>
                <video src={vdo4} width="" height="" controls />
                <h1 className='text-3xl font-bold text-red-700'>Beautiful Chittagong
                </h1>    
            </div>
        </div>
    );
};

export default Overview;