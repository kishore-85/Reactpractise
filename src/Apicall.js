import React,{useState,useEffect} from "react";
import useCustomex from "./useCustomex";
function Apicall(props){

    // const val = useCustomex(`https://dummyjson.com/carts`);//Custom Hooks ex
    const[vall,setvall]=useState('');
    // const [data,setdata]= useState([])
    // const [Endpointname,setEndpointname]= useState('users')  //Dynamic endpoint + set data
    // useEffect(()=>{
    //     fetch(`https://dummyjson.com/${Endpointname}`)
    //     .then(a=>a.json())
    //     .then(b=>setdata(b,'sucess'))
    //     .catch(d=>console.error(d,'error'))

    // },[Endpointname])

    useEffect(()=>{
        fetch(`https://dummyjson.com/comments`) //set data from api only
        .then(x=>x.json())
        .then(data=>setvall(data))
        .catch(z=>console.log(z))
        console.log(vall,'vall')
    },[vall])

   
   
   
    return(
        <>
             <p>api component</p>
             {/* <button onClick={()=>setEndpointname("postsu")}>click to update</button> 
             <button  onClick={()=>setEndpointname("carts")}>click to cart</button>
             <button   onClick={()=>setEndpointname("image")}>click to image</button> */}
             
        </>
    )


}

export default Apicall;