import React from 'react'

import { useState } from 'react'
import { useCallback } from 'react'
import Mble_list from './Mble_list'
import Samsung_mobile from './Mobile'
import Tv_Sony from './Tv'
import Tvlist from './Tvlist'

function Category() {
    let [samsung_stock,setSamsung] = useState(10) 
    let [sonyTv,setSony] =useState(50)    

    const buySamsung = useCallback(()=>{     
        setSamsung(--samsung_stock)
    },[samsung_stock])                           //condtion based re-generate.

    const buysony = useCallback(()=>{       
        setSony(--sonyTv)                      //Does't need re-generate.
    },[])
  return (
    <>
       <Mble_list total_mble={samsung_stock}></Mble_list>   
       <Samsung_mobile onClick={buySamsung}></Samsung_mobile>   
       <Tvlist total_tv={sonyTv}></Tvlist>
       <Tv_Sony onclick={buysony}></Tv_Sony>
    </>
  )
}

export default Category