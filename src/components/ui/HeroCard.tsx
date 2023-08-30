import React from 'react'

export default function HeroCard() {
  return (
    <div className='card p-4 bg-blue-200 rounded-3xl'>
      <img className='h-44 w-32' src={require('../../assets/images/logo.png')} alt="hero-cards" />
    </div>
  )
}
