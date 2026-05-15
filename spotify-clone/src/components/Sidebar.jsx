import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

const nav=useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div className="flex items-center gap-3 pl-8 cursor-pointer">
                
                <p className='fomt-bold flex gap-3' onClick={()=>nav('/')}>
                    <img  src={assets.home_icon} alt="fg" className='w-6'/> Home
                    </p>
            </div>
             <div onClick={()=>nav('/search')} className="flex items-center gap-3 pl-8 cursor-pointer">
                <img src={assets.search_icon} alt="fg" className='w-6'/>
                <p className='fomt-bold'>Search </p>
            </div>
        </div>

        <div className='bg-[#121212] h-[85%] rounded p-4 mt-4'> 
            <div className='p-4 flex items-center justify-between '>
                <div className='flex items-center gap-3'>
                    <img src={assets.stack_icon} alt="" className='w-7'/>
                    <p className='font-semibold '>Your library</p>
                </div>
                  <div className='flex items-center gap-3'>
                <img src={assets.arrow_icon} alt="" className='w-3' />
                <img src={assets.plus_icon} alt="" className='w-3' />
                  </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light'>its easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>

                 <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Find some prodcast to Follow</h1>
                    <p className='font-light'>We'll keep you update on new eppisode</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Prodcast</button>
            </div>
            
        </div>
    

    </div>
  )
}

export default Sidebar