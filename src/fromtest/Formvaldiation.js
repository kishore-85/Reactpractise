import { useState } from "react";

function Formvaldiation(){

    let [formvalues,setformvaues]= useState({
        fname:'',
        email:''
    })

   const handleip = (e)=>{
       setformvaues({...formvalues,[e.target.name]:e.target.value})
       console.log(formvalues,'formvalues');

    }
    return(
        <>
        <form >
            <label>Fname:</label>
            <input type="text" name="fname" onChange={handleip}></input><br></br>
            <label>Email: </label>
            <input type="email" name="email" onChange={handleip}></input><br></br>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Formvaldiation;