import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Axios1() {
   const [getdata, setdata] = useState([])
   const [loading, setloading] = useState(false)
   const [errmssg,seterrmssg] = useState(null)
   const [err,seterr] = useState(false)

   
   
    

  

    async function apicall(){
      //    const url =  await fetch('https://jsonplaceholder.typicode.com/posts')
      //    const res =  await url.json().then(res=>console.log(res)).catch(err=>console.log(err))    
      
      //   axios.get('https://jsonplaceholder.typicode.com/posiots')
      //     .then(res=>{
      //         console.log(res.data)
      //     })
      //     .catch(err=>{
      //         console.log(err)

      //     })                
     
  try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setdata(response.data)
      setloading(true)     
      console.log(response.data)
      seterr(false)
  }
  catch(err){
     console.log(err.message)
     seterrmssg(err.message)
     seterr(true)
     setloading(false)
    //  console.log(errmssg)
  }    
     
      
                 
  }

  return (
    <div>Axios1
          {
            (loading===true)?getdata.map((val)=>{
              return <p>{val.id}</p>
            }):null
          }

          {err===true?<p>{errmssg}</p>:null}
          <button onClick={apicall}>get api</button>
    </div>
   
  )
}

export default Axios1