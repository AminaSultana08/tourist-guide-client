

const Title = ({heading,subHeading} ) => {
    return (
        <div className="flex gap-2 justify-center py-10">
        <p className=" font-bold text-2xl uppercase ">{subHeading}</p>
        <h1 className=" font-bold text-red-600 text-2xl uppercase">{heading}</h1>
        </div>
    );
};

export default Title;