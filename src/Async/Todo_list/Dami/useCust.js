import { useEffect } from "react";
import { useState } from "react";
 
function useCust(url){
    const [data,setdata] = useState([])

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(res=>setdata(res))               
        .catch(err=>console.error(err))
    },[])
    return data;
}

export default useCust;