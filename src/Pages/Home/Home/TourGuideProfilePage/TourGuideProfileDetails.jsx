
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const TourGuideProfilePage = () => {
    const[tourGuides,setTourGuides]=useState([])

    useEffect(()=>{
        fetch(`{https://tourist-guide-server-five.vercel.app/users/${_id}}`)
        .then(res=> res.json())
        .then(users=>{
           
            const tourGuideUsers = users.filter(user => user.role === 'tourGuide')
            setTourGuides(tourGuideUsers)
        })
    } ,[])
    return (
        <div className="pt-44">
            <h1>{tourGuides.length} </h1>
            

        </div>
    );
};

export default TourGuideProfilePage;