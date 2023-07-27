import React from 'react'

export default function CTAButton({ name, link }: { name: string, link: string }) {
   return (
      <button className='text-center px-6 rounded-xl py-4 bg-orange-500'><a href={link}>{name}</a></button>
   )
}
