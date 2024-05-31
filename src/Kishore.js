import React,{useState} from "react";

function Kishore (){
    const [preval,newval] = useState({
        clgename:'',
        rollno:'',
    })

    const newfun= (e)=>{
         console.log(e)
        //  let a = e.target.name;
        //  let b = e.target.value;
        newval({...preval,[e.target.name]:e.target.value})
        console.log(preval,'current-value')
    };

  return(
    <>
    clge:<input type="text" name="clgename" onChange={newfun} />
    rollno:<input type="number" name="rollno" onChange={newfun}/>

    </>
   )
}

export default Kishore;