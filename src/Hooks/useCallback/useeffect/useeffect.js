import React, { useEffect, useState } from 'react'

function Useeffect() {

    let [loading,setloading] = useState(false);

    function handleclick(){
        setloading(!loading)
    }

    function myfun(){
        console.log('use effect called')
    }
    
    useEffect(()=>{
        // setloading(!loading)
       
       
        myfun()
    },[loading])
  return (
    <div>
        <button onClick={handleclick}>press</button>
    </div>
  )
}

export default Useeffect