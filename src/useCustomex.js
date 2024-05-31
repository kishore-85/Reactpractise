import {useState,useEffect} from 'react'

function useCustomex(url){
const [data,setdata]= useState([])

useEffect(()=>{
   fetch(url)
   .then(res=> res.json())
   .then(result=>setdata(result))
   .catch(x=>console.error(x))
},[data]

)


    return data;

}

export default useCustomex;