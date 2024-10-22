import React from 'react'
// import { useCallback } from 'react';
import { useState } from 'react'
import { useMemo } from 'react'

function Memo() {

    let [count,setCount] = useState(0);
    let [background,setbackground] = useState(false)
    const handleopen = ()=>{     

        setCount((pre)=>{
            return ++pre
        })       
       
    }
   
    const find = useMemo(()=>{
        let i=0;
        while(i< 2000000000)i++
      return  count%2===0
    },[count])

    const handlebackground =()=>{
        setbackground(!background)
     }
  return (
    <div>
         <p>{count}</p>
         <button onClick={handleopen}>press</button>

         <div>
             {find===true?<span>count is even</span>:<span>count is odd</span>}
             {background===true?<span >background color  is settled</span>:null}                
         </div>
         <button onClick={handlebackground}>background</button>

    </div>
  )
}

export default Memo