/* eslint-disable react-refresh/only-export-components */
import  { Component } from 'react';
import Faq from 'react-faq-component';


const FAQ = ({packageDetails}) => {
    const {day1_description,day1_tourPlan , day2_description,day2_tourPlan,day3_description,
        day3_tourPlan} = packageDetails
        
const data = {
    "title": "",
    "rows": [
        {
            "title": "Day 1",
            "content": (
                <>
                <h1 className='text-2xl font-bold text-red-400 bg-black py-4 px-5'> TourPlan {day1_tourPlan}:</h1> <br/>
                <p className='text-xl font-bold text-red-200 bg-black py-4 px-5'> Description{day1_description}:</p>
                </>
            )
        },
        {
            "title": "Day 2",
            "content": (
                <>
                <h1 className='text-2xl font-bold text-red-400 bg-black py-4 px-5'> TourPlan {day2_tourPlan}:</h1> <br/>
                <p className='text-xl font-bold text-red-200 bg-black py-4 px-5'> Description{day2_description}:</p>
                </>
            )
        },
        {
            "title": "Day 3",
            "content": (
                <>
                <h1 className='text-2xl font-bold text-red-400 bg-black py-4 px-5'> TourPlan {day3_tourPlan}:</h1> <br/>
                <p className='text-xl font-bold text-red-200 bg-black py-4 px-5'> Description{day3_description}:</p>
                </>
            )
        },
        
    ]
}
    return (
        <div className='bg-zinc-800 w-1/2 mx-auto'>
        <Faq  data={data}/>
        </div>
    );
};

export default FAQ;