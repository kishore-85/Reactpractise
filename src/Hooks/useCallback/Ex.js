import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';
import Exprops from './Exprops';

function Ex() {

  let [count,setcount] =useState(0)
  let [ticket,setticekt] =useState(10)
  const handlechange =()=>{
    console.log('count fun ')
    setcount(count++)
  }

  const handlechange2 = useCallback(()=>{
    setticekt(ticket--)
  },[ticket])
  return (
    <div>
      <p>{count}</p>
      <button onClick={handlechange}>count</button> <br></br>
      
      <Exprops  val2={ticket} funticket={handlechange2}></Exprops>
    </div>
  )
}

export default Ex;