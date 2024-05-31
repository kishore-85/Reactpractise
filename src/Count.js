import react, {useState} from 'react';
function Count(){
    let [currenttoken,settoken]= useState(10)

    let myfun =() =>{
             settoken(currenttoken+1)
    }
      
    return(
           <>
           <button onClick={myfun}>Click</button>
           <p>Token no:{currenttoken}</p>
           </>
       )

}

export default Count;