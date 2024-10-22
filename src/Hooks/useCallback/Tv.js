import React from 'react'

function Tv_Sony(props) {
    console.log('sony tv component renders')
  return (
    <div>
         <button onClick={props.onclick}>buy sony</button>
    </div>
  )
}

export default React.memo(Tv_Sony);