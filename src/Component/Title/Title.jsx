

const Title = ({heading,subHeading} ) => {
    return (
        <div className="flex gap-1 justify-center py-10">
        <p className=" font-medium text-2xl">{subHeading}</p>
        <h1 className=" font-bold text-red-600 text-2xl uppercase">{heading}</h1>
        </div>
    );
};

export default Title;