import React from 'react'

function Mble_list(props) {
    console.log('mobile list component renders')
  return (
    <div>
       <p>{props.total_mble}</p>
    </div>
  )
}

export default React.memo(Mble_list)