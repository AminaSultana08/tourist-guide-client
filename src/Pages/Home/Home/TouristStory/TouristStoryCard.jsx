

const TouristStoryCard = ({data}) => {
    const{placeName ,photo,touristName,touristPhoto,email,address,price,description}=data
    return (
        <div>
            <div>
            <div
            className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 px-2  border-2 border-red-200 shadow-none">
            <div
              className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <img
                src={touristPhoto}
                alt="Tania Andrew"
                className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <h5
                    className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {touristName}
                  </h5>
                 
                </div>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                 {address}
                </p>
              </div>
            </div>
            <div className="p-0 mb-6">
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {description}
              </p>
            </div>
          </div>  
            </div>
        </div>
    );
};

export default TouristStoryCard;