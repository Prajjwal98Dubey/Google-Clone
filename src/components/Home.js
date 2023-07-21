import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [text,setText]=useState("")
  return (
    <div className='bg-[#202124]'>
    <div className='flex justify-center items-center mt-36'>
     <div className='text-8xl font-semibold text-white'>Google</div>
    </div>
    <div className='flex justify-center mt-12 '>
     <div>
       <input type="text" className=' text-white rounded-2xl bg-[#202124] text-xl font-semibold border border-white w-[600px] h-[40px] pl-2' value={text} onChange={(e)=>setText(e.target.value)} />
     </div>
     {/* {console.log(text)} */}
    </div>
    <div className='flex justify-center mt-10'>
     <div>
     <Link to={"/results?v="+text}><button className="w-[150px] h-[40px] pt-[1px] text-white border border-black mr-4 bg-[#303134] hover:border-white">Google Search</button></Link>
     <Link to="/lucky"><button className="w-[150px] h-[40px] pt-[1px] text-white border border-black bg-[#303134] hover:border-white">I'm Feeling Lucky</button>
     </Link>
     </div>
    </div>
    </div>
  )
}

export default Home