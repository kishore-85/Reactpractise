import React from 'react'
import { memo } from 'react'

function Samsung_mobile(props) {

    console.log('samsung mobile component renders')
  return (
    <div>
        <button onClick={props.onClick}>buy samsung</button>
    </div>
  )
}

export default React.memo(Samsung_mobile)