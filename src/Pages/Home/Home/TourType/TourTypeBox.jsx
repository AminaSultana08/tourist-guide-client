/* eslint-disable react/prop-types */


import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'

const TourTypeBox = ({label, icon:Icon, selected} ) => {
    console.log(selected);
    const [params, setParams] = useSearchParams()
    const navigate = useNavigate()
    const handleClick=()=>{
        let currentQuery={}
        if(params){
            currentQuery= qs.parse(params.toString ())
            const updatedQuery ={...currentQuery, tour_type:label}
            const url = qs.stringifyUrl({
                url:'/',
                query:updatedQuery,
            })
            navigate (url)
        }
    }
    params.get('tour_type')
    return (
        <div onClick={handleClick} className={`flex w-44 flex-col items-center justify-center gap-2 p-3 border-b-2 transition cursor-pointer hover:text-red-900 bg-red-200 ${ selected ? 'border-b-neutral-800 text-red-900':'' } `}>
        <Icon size={26 } />
           <div className="text-lg font-semibold  ">
           {label}
           </div>
        </div>
    );
};

export default TourTypeBox;