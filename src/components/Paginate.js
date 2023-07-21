import React from 'react'

const Paginate = ({postperPage,total,handlePaginate}) => {
    const pages=[]
    for(let i=1;i<=Math.ceil(total/postperPage);i++){
        pages.push(i)
    }
  return (
    <>
    <div className='ml-[160px]'>
    <div className='w-fit h-[35px] flex'>
    {pages.map((p)=><div key={p} className='w-fit mr-10 cursor-pointer hover:underline h-fit text-[#8ab4f8] text-center' onClick={()=>handlePaginate(p)}>{p}</div>)}
    </div>
    </div>
    </>
  )
}

export default Paginate