import React from 'react'

export default function AudioPlayerCard() {
    return (
        <div className='flex items-center gap-4 bg-white rounded-md p-2'>
            <div className="songs-text mx-10">
                <h4 className='text-base font-bold'>Lorem ipsum dolor sit amet</h4>
                <p className='text-sm text-gray-400'>Lorem ipsum </p>
            </div>
            <div className="song-icon">
                <svg className='w-4 h-4 p-2 border text-white 
                 bg-orange-500 rounded-lg border-none box-content' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128Z" />
                </svg>
            </div>
        </div>
    )
}
