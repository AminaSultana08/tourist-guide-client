import { useEffect, useState } from "react";
import Title from "../../../../Component/Title/Title";
import TouristStoryCard from "./TouristStoryCard";


const TouristStory = () => {
    const [story, setStory]=useState([])
    useEffect(()=>{
        fetch("https://tourist-guide-server-five.vercel.app/story")
        .then(res =>res.json())
        .then(data=>setStory(data))
    } ,[] )
    return (
        <div>
        <h1 ><Title subHeading='Tourist' heading='Story' ></Title> </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 shadow-2xl shadow-red-900 mx-2">
           {
            story.map(data=><TouristStoryCard key={data.story_id} data={data} ></TouristStoryCard>)
           }
        </div>
        </div>
    );
};

export default TouristStory;