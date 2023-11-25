import { useEffect, useState } from "react";


const useTourPackages = () => {
    const [tourPackages,setTourPackages] = useState()
    const [loading, setLoading]=  useState(true)
    useEffect(()=>{
        fetch('tour_fakeData.json')
        .then(res=>res.json())
        .then(data=>{
            setTourPackages(data)
            setLoading(false)
        })
    } ,[] )
    return [tourPackages, loading]
};

export default useTourPackages;