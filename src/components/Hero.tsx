import React from 'react'
import '../assets/css/hero.css'
import HeroCard from './ui/HeroCard'

export default function Hero() {
  return (
    <div className='container h-screen w-full bg-slate-200 flex flex-col justify-between'>
      <div className="flex justify-between grow h-full">
        <div className="hero-texts w-1/2 bg-gray-500 flex flex-col justify-center">
          <h1>Welcome</h1>
          <h1>to <span>RLikes</span></h1>
          <p>Digital Retailer of Content<br />
            Watch & Create Content
          </p>
        </div>
        <div className="w-1/2">
          <div className="card-container flex items-center justify-center gap-10 h-full -rotate-12">
            <div className='flex flex-col gap-10'>
              {
                [1, 2, 3, 4, 5].map((item, index) => <HeroCard key={index} />)
              }
            </div>
            <div className='flex flex-col gap-10'>
              {
                [1, 2, 3, 4, 5].map((item, index) => <HeroCard key={index} />)
              }
            </div>
            <div className='flex flex-col gap-10'>
              {
                [1, 2, 3, 4, 5].map((item, index) => <HeroCard key={index} />)
              }
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        Hero bottom
      </div>
    </div>
  )
}
