import React from 'react'

function Tvlist(props) {
    console.log('Tv list component renders')
  return (
    <div>
        <p>{props.total_tv}</p>
    </div>
  )
}

export default React.memo(Tvlist)