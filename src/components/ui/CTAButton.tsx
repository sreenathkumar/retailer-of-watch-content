import React from 'react'

export default function CTAButton({ id, name, link }: { id: string | undefined, name: string, link: string }) {
   return (
      <button id={id} className='text-center text-white px-6 rounded-xl py-4 bg-orange-500'><a href={link}>{name}</a></button>
   )
}
