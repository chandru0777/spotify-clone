import React, { useEffect, useRef } from 'react'
import DisplayHome from './DisplayHome'
import {Routes, Route, useLocation} from 'react-router-dom'
import Displayalbum from './Displayalbum'
import { albumsData } from '../assets/assets';
import Searchpage from './Searchpage';

function Display() {

const disPlayRef=useRef();
const loc=useLocation();
const isAlbum = loc.pathname.includes("album");
const albumId = isAlbum ?  loc.pathname.slice(-1) : "";
const bgclr = albumsData[Number(albumId)].bgColor;

useEffect(()=>{
  if(isAlbum){
    disPlayRef.current.style.background = `linear-gradient(${bgclr},#121212)`;

  }else{
    disPlayRef.current.style.background="#121212";
  }
})

  return (
    <div ref={disPlayRef} className='w-full px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:[75%]'>
        <Routes>
            <Route path='/' element ={<DisplayHome/>}></Route>
            <Route path='/album/:id' element ={<Displayalbum/>}></Route>
            <Route path='/search' element={<Searchpage/>}></Route>
        </Routes>
        
    </div>
  )
}

export default Display