import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const nav=useNavigate()
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold '>
        <div className='flex items-center gap-2'>
            <img onClick={()=>nav(-1)} className='w-8 border-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
             <img onClick={()=>nav(1)} className='w-8 border-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer '>Explore premium</p>
            <p className='bg-black text-white rounded-2xl text-[15px] px-4 py-2 cursor-pointer'>Install App</p>
            <p className='bg-orange-600 text-black w-9 h-9 rounded-full flex items-center justify-center cursor-pointer'>C</p>
        </div>
       
    </div>

      <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>podcast</p>
        </div>
    </>
  )
}

export default Navbar