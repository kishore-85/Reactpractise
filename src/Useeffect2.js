import React,{useEffect,useState} from "react";
import useCustomex from "./useCustomex";
function Useeffect2(){
 
// const [state,setstate] =useState('beforeset');
// const [data,setdata] =useState();

// const handlesubmit = ()=>{
//     setstate('submitted')
// }

// useEffect(()=>{
//     console.log('mounting');
//     fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(res=>res.json())
//     .then(val=>setdata(val))        
//     .catch(err=>console.log(err,'er'))
//      console.log(data,'data')
    
// },[])

const {data} = useCustomex('https://jsonplaceholder.typicode.com/posts')

// useEffect(()=>{
//     console.log('updating')

// },[state])

    return(
        <>
          {/* <p>{state}</p> */}
          <p>hi</p>
          <p>{data}</p>
          {/* <button onClick={handlesubmit}>click</button> */}
        
        </>
    )

}

export default Useeffect2;