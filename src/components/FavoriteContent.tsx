import React from 'react'
import AudioPlayerCard from './ui/AudioPlayerCard'
import SongThumnail from '../assets/images/creator.webp'
import '../assets/css/favorite-content.css'

export default function FavoriteContent() {
  return (
    <div className='container px-6 py-10 mx-auto bg-gray-100 relative'>
      <div className='flex flex-col items-center z-20 relative'>
        <span className='text-3xl font-semibold'>Choose your <span className='text-blue-600'>favorite</span></span>
        <span className='text-3xl font-semibold mb-10'><span className='text-blue-600' >content</span> genre</span>
      </div>
      <div>

      </div>
      <div className="audio-player flex">
        <div className='flex flex-col gap-4 mr-10'>
          <AudioPlayerCard />
          <AudioPlayerCard />
          <AudioPlayerCard />
          <AudioPlayerCard />
        </div>
        <div className='flex flex-col justify-end items-center p-4 bg-cover bg-no-repeat bg-center w-56 rounded-lg' style={{ backgroundImage: `url(${SongThumnail})` }}>
          <svg className='play-btn p-4 bg-orange-400 box-content rounded-xl relative' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" /></svg>
        </div>
      </div>
    </div>
  )
}
