import React from 'react'

export default function CreatorCard({ id, img, name }: { id: number, img: string, name: string }) {
  return (
    <div id={`creator-${id}`} className='creator-card flex flex-col items-center shadow-lg bg-white rounded-xl px-8 py-4'>
      <img className='w-20 h-20 rounded-full mb-2' src={img} alt={`creator_${name}`} />
      <h4 className='text-base font-bold mb-2'>{name}</h4>
      <span className='text-sm px-3 py-0.5 rounded-full bg-gray-400'>Creator</span>
    </div>
  )
}
