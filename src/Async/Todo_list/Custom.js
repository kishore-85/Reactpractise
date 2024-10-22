import { useEffect } from "react";
import useCust from "./Dami/useCust";

function Custom(props){

    const data = useCust('https://jsonplaceholder.typicode.com/posts')
    console.log('2',data)
    
   

    return(
        <>
           <p>cust</p>
           {
               data.map((val,ind)=>{
                 return  <p key={ind}>{val.title}</p>
               })
           }
        </>
    )
}

export default Custom;