import React, { useEffect, useState } from 'react'
import {quotes} from './Constants'

const Lucky = () => {
    const [q,setQ]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
           setQ(Math.floor(Math.random()*quotes.length))
           
        },5000)

        return ()=>{
            clearTimeout()
        }
        
    },[q])
    
    return (
        <>
            <div className='flex justify-center mt-60'>
                <div className='font-mono text-2xl font-semibold mb-10 text-center text-white'>
                      "{quotes[q].text}"
                </div>
            </div>
            {/* <div className='flex justify-center mt-10'>
                <div className='font-serif text-xl'>
                     {quotes[q].author}
                </div>
            </div> */}
        </>
    )
}

export default Lucky