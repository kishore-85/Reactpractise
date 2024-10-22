import React from 'react'
import { useEffect } from 'react'

function Exprops(props) {
    console.log('props compoennet')
  useEffect(()=>{
           console.log('props function')
  },[props.funticket])
  useEffect(()=>{
    console.log('props value')
},[props.val2])
  return (
    <div>

        
        <p>{props.val2}</p>
        <button onClick={props.funticket}>ticket</button>
    </div>
  )
}

export default React.memo(Exprops)