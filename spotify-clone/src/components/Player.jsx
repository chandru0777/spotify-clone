import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import {playerContext} from './context/playerContext'
const Player = () => {

const {seekBg, seekBar ,play ,pause ,playStatus , track , time , before , after , seeBgClik} = useContext(playerContext);


  return (
   <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">

  {/* Left */}
  <div className="hidden lg:flex items-center gap-4">
    <img className="w-12" src={track.image} alt="" />
    <div>
      <p>{track.name}</p>
      <p>{track.desc.slice(0, 16)}...</p>
    </div>
  </div>

  {/* Center (Controls + Progress bar) */}
  <div className=" flex flex-col items-center gap-1 m-auto">

    {/* Controls */}
    <div className="flex gap-4 mb-">
      <img className="w-3 h-4  cursor-pointer" src={assets.shuffle_icon} />
      <img onClick={before} className="w-3 cursor-pointer" src={assets.prev_icon} />
      {playStatus?(
          <img onClick={pause} className="w-3 h-4 cursor-pointer" src={assets.pause_icon} />
      ):(
        <img onClick={play} className="w-3 h-4 cursor-pointer" src={assets.play_icon} />
      )}
      
     
      <img onClick={after} className="w-3 h-4 cursor-pointer" src={assets.next_icon} />
      <img className="w-3 h-4 cursor-pointer" src={assets.loop_icon} />
    </div>

    {/* Progress Bar */}
    <div className="flex items-center gap-5 ">
      <p>{time.currentTime.minute}:{time.currentTime.second}</p>
      <div ref={seekBg} onClick={seeBgClik} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
        <div
         ref={seekBar} className="h-1 border-none w-0  bg-green-500  rounded-full"
         ></div>
      </div>
      <p>{time.totalTime.minute}:{time.totalTime.second}</p>
    </div>

  </div>
  <div className='hidden lg:flex items-center gap-2 opacity-75'>
    <img className='w-4 '  src={assets.play_icon} alt="" />
    <img className='w-4'  src={assets.mic_icon} alt="" />
    <img className='w-4'  src={assets.queue_icon} alt="" />
    <img className='w-4'  src={assets.speaker_icon} alt="" />
    <img className='w-4'  src={assets.volume_icon} alt="" />
   <div className='w-20 h-1 bg-slate-50 rounded'></div>
    <img className='w-4'  src={assets.mini_player_icon} alt="" />
    <img className='w-4'  src={assets.zoom_icon} alt="" />

  </div>
</div>
  )
}

export default Player