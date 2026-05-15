import React, { useContext } from 'react'
import { playerContext } from './context/playerContext'



function Songitems(props) {

   const {playWithId} =useContext(playerContext)
  return (
     <div onClick={()=>playWithId(props.id)} className='min-w-[200px] max-w-[300px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] '>
        <img className='rounded' src={props.image} alt="" />
        <p className='font-bold mt-2 mb-1'>{props.name}</p>
        <p className='text-slate-200 text-sm'>{props.desc}</p>
    </div>
  )
}

export default Songitems