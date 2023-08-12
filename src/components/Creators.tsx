import React from 'react'
import CreatorCard from './ui/CreatorCard'
import CreatorImg from '../assets/images/creator.webp'

export default function Creators() {
  return (
    <div className='container px-6 mx-auto bg-gray-100 relative'>
      <div className="background absolute top-0 left-0 z-10 w-full h-full">
        <div className="shapes flex justify-around items-center h-full">
          <div className="box-1 w-36 h-36 rounded-3xl bg-gray-200">
           
          </div>
          <div className="box-2 w-56 h-56 rounded-3xl bg-gray-200">
           
          </div>
          <div className="box-3 w-36 h-36 rounded-3xl bg-gray-200">
           
          </div>
        </div>
      </div>
        <div className='flex flex-col items-center z-20 relative'>
            <span className='text-3xl font-semibold'>Enjoy listening to endless</span>
            <span className='text-3xl font-semibold mb-10'>stories with your creators</span>
        </div>
        <div className='flex justify-around z-20 relative'>
        <CreatorCard img={CreatorImg} name='Creator'/>
        <CreatorCard img={CreatorImg} name='Creator'/>
        <CreatorCard img={CreatorImg} name='Creator'/>
        <CreatorCard img={CreatorImg} name='Creator'/>
        </div>
      </div>
  )
}
