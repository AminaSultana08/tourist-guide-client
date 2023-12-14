import { useLoaderData } from "react-router-dom";



const BookedPackages = () => {
    const packages=useLoaderData()
    console.log(packages);
    return (
        <div>
            BookingPackages:
        </div>
    );
};

export default BookedPackages;