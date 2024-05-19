import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../../../Component/Title/Title";

const MeetTourGuide = () => {
    const [tourGuides,setTourGuides]=useState([])
    useEffect(()=>{
        fetch('https://tourist-guide-server-five.vercel.app/users')
        .then(res=> res.json())
        .then(users=>{
           
            const tourGuideUsers = users.filter(user => user.role === 'tourGuide')
            setTourGuides(tourGuideUsers)
        })
    } ,[])
    return (
        <div>
        <h1 className="" ><Title subHeading='MEET' heading=' Our TourGuide' ></Title> </h1>
           
          <div className="grid lg:grid-cols-3 lg:mx-2 md:grid-cols-2 gap-2 grid-cols-1 justify-center items-center">
          {
            tourGuides.map(user=>  <div key={user._id} className="relative flex flex-col text-gray-700 bg-gray-100  shadow-md bg-clip-border rounded-xl w-72 mx-auto">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
              <img className="w-full h-64" src={user.photoURL} alt="profile-picture" />
            </div>
            <div className="p-6 text-center">
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {user?.name}
               
              </h4>
              <h4 className="text-xl bg-red-700 text-white mx-5 rounded-3xl" >{user?.role} </h4>
            </div>
            <Link to={`/tourGuideProfilePage/${user._id}`}><button className="bg-red-100 font-bold text-lg text-red-800 rounded-3xl p-3 w-1/2 mx-16 mb-3">View Details</button> </Link>
          </div>)
           }
          </div>
        </div>
    );
};

export default MeetTourGuide;