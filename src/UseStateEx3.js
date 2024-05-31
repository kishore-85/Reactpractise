import React,{useSate} from "react";

function UseStateEx3(){
 
const [cvalue, setvalue]= useSate({
    fname:'',
    rollno:''
})
  const updatevalue = (e)=>{
         console.log(e);
         let a= e.target.name;
         let b= e.target.value;
         setvalue({a:b})
  }
     return(
         <>
         <form>
             name:<input name="fname" type="text" onChange={updatevalue} />
             rollno:<input name="rollno" type="number" onChange={updatevalue} />
         </form>
         </>
     )


}


export default UseStateEx3;