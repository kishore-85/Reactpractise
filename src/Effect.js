import React,{useEffect,useState}from "react";

function Effect(){    

const [token,settoken] = useState(0)
const [pay,setdone] = useState(0)

const updateval =() =>{
    settoken(token + 1)
}

const payment = ()=>{
   setdone('payment done')
}

useEffect( ()=>{
   console.log('mounting')  //Mounting
},[]
)

useEffect( ()=>{
    console.log('updating')  //updating-use_effect syntax
},[token])

useEffect( ()=>{
    console.log('payemnt success')  //updating-use_effect syntax
},[pay])
    return(
        <>
        <p>Hi!Token no:{token}</p>
        <button onClick={updateval}>Click</button>
        <p>Your estimmated amount :{pay}</p>
        <button onClick={payment}>click to pay</button>
        </>
    )

}

export default Effect;