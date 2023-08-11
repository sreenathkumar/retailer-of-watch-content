import React from 'react'

export default function CreatorCard({img,name}:{img:string,name:string}) {
  return (
    <div className='flex flex-col items-center shadow-lg rounded-xl px-8 py-4'>
        <img className='w-20 h-20 rounded-full mb-2' src={img} alt={`creator_${name}`} />
        <h4 className='text-base font-bold mb-2'>{name}</h4>
        <span className='text-sm px-3 py-0.5 rounded-full bg-gray-400'>Creator</span>
    </div>
  )
}
