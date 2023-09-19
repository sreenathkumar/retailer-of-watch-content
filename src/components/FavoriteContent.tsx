import React, { useState, useLayoutEffect, useRef } from 'react'
import AudioPlayerCard from './ui/AudioPlayerCard'
import SongThumnail from '../assets/images/creator.webp'
import '../assets/css/favorite-content.css'
import AnimatedSvg from './ui/AnimatedSvg'
import gsap from 'gsap'

export default function FavoriteContent() {
  const [svgWidth, setSvgWidth] = useState(0);
  const favorite = useRef(null)

  useLayoutEffect(() => {
    const platformContainer = document.getElementById('fav-section');
    const bgWidth = platformContainer?.offsetWidth;
    if (bgWidth) {
      setSvgWidth(bgWidth * 2)
    }

    const currentFavoriteElement = favorite.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (currentFavoriteElement) {

              gsap.context(() => {
                gsap.from('#audio-list', { duration: 2, delay: 2, opacity: 0, y: 100 })
                gsap.from('#audio-thumb', { duration: 2, delay: 2, opacity: 0, scale: 0 })
                gsap.from('.play-btn', { duration: 2, delay: 4, opacity: 0, scale: 0 })
                gsap.from('#listen-btn', { duration: 2, delay: 3, opacity: 0, scale: 0 })
                gsap.from('#fav-section', { duration: 2, rotateX: 90 })
              }, favorite)

              observer.unobserve(currentFavoriteElement)
            }
          }
        })

      }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    })
    if (currentFavoriteElement) {
      observer.observe(currentFavoriteElement);
    }
    return () => {
      if (currentFavoriteElement) {
        observer.unobserve(currentFavoriteElement)
      }
    }

  }, [])
  return (
    <div ref={favorite}>
      <div id='fav-section' className='container bg-gray-100 px-6 py-10 mx-auto relative overflow-hidden' >
        <AnimatedSvg id='fav-bg' numberOfCircles={40} duration={7} width={svgWidth} position='fav-pos' strokeWidth={1} />
        <div className='relative z-10'>
          <div className='flex flex-col items-center z-20 relative'>
            <span className='font-bold text-h'>Choose your <span className='text-blue-600'>favorite</span></span>
            <span className='font-bold mb-10 text-h'><span className='text-blue-600' >content</span> genre</span>
          </div>
          <div>

          </div>
          <div className="audio-player flex justify-center mb-10">
            <div id='audio-list' className='flex flex-col gap-4 mr-14'>
              <AudioPlayerCard />
              <AudioPlayerCard />
              <AudioPlayerCard />
              <AudioPlayerCard />
            </div>
            <div id='audio-thumb' className='flex flex-col justify-end items-center p-4 bg-cover bg-no-repeat bg-center w-56 rounded-lg' style={{ backgroundImage: `url(${SongThumnail})` }}>
              <div className='play-btn p-4 bg-orange-400 box-content rounded-xl relative'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" /></svg>
              </div>
            </div>
          </div>
          <button id='listen-btn' className='bg-orange-400 px-6 py-4 mx-auto rounded-xl flex justify-center items-center gap-2'>
            <span>Start Listening</span>
            <svg xmlns="http://www.w3.org/2000/svg" width='16px' height='16px' viewBox="0 0 32 32"><path fill="currentColor" d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1.001 1.001 0 0 1 11 23Zm1-11.382v8.764L20.764 16Z" /><path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Z" /></svg>
          </button>
        </div>

      </div>
    </div>

  )
}
