

const Img = ({item} ) => {
    const{image}=item
    return (
        
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 pb-3 w-96 mx-auto md:grid-cols-4">
		<img src={image} alt="" className="w-80 h-full  rounded shadow-sm  dark:bg-gray-500 aspect-square" />
		
	</div>
    );   
};

export default Img;