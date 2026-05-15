import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitems from './Albumitems'
import Songitems from './Songitems'

function DisplayHome() {
  return (
    <div>
        <Navbar/>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Your Top PlayList</h1>
          <div className='flex overflow-auto'>
          {albumsData.map((item , index)=>(
            <Albumitems 
            key={index}
            name={item.name}
             desc ={item.desc}
              id ={item.id} 
              image={item.image}/>))}
          </div>
      </div>
      <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Recently Plyed</h1>
          <div className='flex overflow-auto'>
          {songsData.map((item , index)=>(
            <Songitems
            key={index}
            name={item.name}
             desc ={item.desc}
              id ={item.id} 
              image={item.image}/>))}
          </div>
      </div>
    </div>
  )
}

export default DisplayHome