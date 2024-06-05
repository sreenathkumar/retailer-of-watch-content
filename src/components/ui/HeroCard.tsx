import React from 'react'

export default function HeroCard({ img = 'logo.png' }: { img?: string }) {
  return (
    <div className='card rounded-3xl'>
      <img className='h-44 w-32 rounded-3xl' src={require(`../../assets/images/${img}`)} alt="hero-cards" />
    </div>
  )
}
