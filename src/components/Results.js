import React from 'react'
import { Link } from 'react-router-dom'

const Results = ({item}) => {
  return (
   <div className='w-[650px] h-[150px] p-1 mb-3'>
      <Link to={item.url} target="_blank"><div className='text-2xl mb-2 text-[#8ab4f8] hover:underline  cursor-pointer'>{item.title}</div></Link>
      <div className='text-[#bdc1c6] text-xl mb-1'>{item.description}</div>
   </div>
  )
}

export default Results