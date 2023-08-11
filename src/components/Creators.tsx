import React from 'react'
import CreatorCard from './ui/CreatorCard'
import CreatorImg from '../assets/images/creator.webp'

export default function Creators() {
  return (
    <div className='container px-6 py-32 mx-auto'>
        <div className='flex flex-col'>
            <span>Enjoy listening to endless</span>
            <span>Enjoy listening to endless</span>
        </div>
        <div className='inline-block'>
        <CreatorCard img={CreatorImg} name='Creator'/>
        </div>
      </div>
  )
}
