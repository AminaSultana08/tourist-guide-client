import { useEffect, useState } from "react";


const useTourPackages = () => {
    const [tourPackages,setTourPackages] = useState()
    const [loading, setLoading]=  useState(true)
    useEffect(()=>{
        fetch('https://tourist-guide-server-five.vercel.app/packages')
        .then(res=>res.json())
        .then(data=>{
            setTourPackages(data)
            setLoading(false)
        })
    } ,[] )
    return [tourPackages, loading,setTourPackages]
};

export default useTourPackages;