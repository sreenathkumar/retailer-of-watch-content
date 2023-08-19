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
      <div className="audio-player flex justify-center mb-10">
        <div className='flex flex-col gap-4 mr-14'>
          <AudioPlayerCard />
          <AudioPlayerCard />
          <AudioPlayerCard />
          <AudioPlayerCard />
        </div>
        <div className='flex flex-col justify-end items-center p-4 bg-cover bg-no-repeat bg-center w-56 rounded-lg' style={{ backgroundImage: `url(${SongThumnail})` }}>
          <div className='play-btn p-4 bg-orange-400 box-content rounded-xl relative'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" /></svg>
          </div>
        </div>
      </div>
      <button className='bg-orange-400 px-6 py-4 mx-auto rounded-xl flex justify-center items-center gap-2'>
        <span>Start Listening</span>
        <svg xmlns="http://www.w3.org/2000/svg" width='16px' height='16px' viewBox="0 0 32 32"><path fill="currentColor" d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1.001 1.001 0 0 1 11 23Zm1-11.382v8.764L20.764 16Z" /><path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Z" /></svg>
      </button>
    </div>
  )
}
