import React, { useLayoutEffect } from 'react'
import '../assets/css/hero.css'
import HeroCard from './ui/HeroCard'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getRandomInt } from '../utils/getRandomNumber';
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const hero = React.useRef(null);


  //animations for hero section
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      //1st column card animation
      gsap.to("#hero-card-1", { y: '360', gap: 20, duration: 2, ease: 'power4.out' });
      gsap.to('#hero-card-1', {
        scrollTrigger: {
          trigger: document.querySelector("#feature-section"),
          start: "top 70%",
          end: "top 30%",
          toggleActions: 'restart reverse restart none',
        },
        y: '-360',
        duration: 2,
        ease: 'power4.out'
      });

      //2nd column card animation
      gsap.to("#hero-card-2", { y: '-360', gap: 20, duration: 2, });
      gsap.to('#hero-card-2', {
        scrollTrigger: {
          trigger: document.querySelector("#feature-section"),
          start: "top 70%",
          end: "top 30%",
          toggleActions: 'restart reverse restart none',
        },
        y: '360',
        duration: 2,
        ease: 'power4.out'
      });

      //3rd column card animation
      gsap.to("#hero-card-3", { y: '360', gap: 20, duration: 2 });
      gsap.to('#hero-card-3', {
        scrollTrigger: {
          trigger: document.querySelector("#feature-section"),
          start: "top 70%",
          end: "top 30%",
          toggleActions: 'restart reverse restart none'
        },
        y: '-360',
        duration: 2,
        ease: 'power4.out'
      });
      gsap.to("#hero-btn", { scale: 1, duration: 2, }); //hero button animation
      gsap.from("#hero-heading-1", { y: 50, duration: 2, }); //hero heading 1 animation
      gsap.from("#hero-heading-2", { y: 50, duration: 2, opacity: 0 }); //hero heading 2 animation
      gsap.from("#hero-des", { duration: 2, opacity: 0, }); //hero description animation
      gsap.from("#hero-bottom .icon-box", { y: 90, opacity: 0, duration: 2, stagger: 0.5, });//hero bottom anitmation
    }, hero);// <- Scope!

    return () => ctx.revert();
  }, []);

  return (
    <div className='hero container relative h-screen overflow-hidden w-full mx-auto px-6 flex flex-col justify-between' ref={hero}>
      <div className="hero-main md:flex md:justify-between md:grow md:h-full">
        <div className="hero-texts w-1/2 bg-white flex flex-col justify-center items-start ">
          <h1 id='hero-heading-1'>Welcome</h1>
          <h1 id='hero-heading-2' className='mb-4'>to <span className='text-blue-600'>SLikes</span></h1>
          <p id='hero-des' className='mb-6'>Digital Retailer of Content<br />
            Watch & Create Content
          </p>
          <a href='/' id='hero-btn' className='py-4 px-10 scale-0 rounded-xl inline text-white bg-orange-500 '>Get Started</a>
        </div>
        <div className="card-container relative w-1/2 overflow-hidden">
          <div className="card-wrapper bg-white flex items-center justify-center gap-10 h-full -rotate-6" >
            <div className='flex flex-col gap-14 origin-center' id='hero-card-1'>
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => <HeroCard key={index} img={`img-${getRandomInt(1, 8)}.png`} />)
              }
            </div>
            <div className='flex flex-col gap-14 origin-center' id='hero-card-2'>
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => <HeroCard key={index} img={`img-${getRandomInt(1, 8)}.png`} />)
              }
            </div>
            <div className='flex flex-col gap-14 origin-center' id='hero-card-3'>
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => <HeroCard key={index} img={`img-${getRandomInt(1, 8)}.png`} />)
              }
            </div>
          </div>
        </div>
      </div>
      <div id='hero-bottom' className="hero-bottom absolute px-6 left-0 right-0">
        <div className="hero-bottom-wrapper flex flex-wrap justify-between gap-6">
          <div className="icon-box flex">
            <div className="icon-box-icon mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className='border-2 border-gray-500 rounded-full' viewBox="0 0 256 256"><path fill="currentColor" d="M112.6 158.43a58 58 0 1 0-57.2 0a93.83 93.83 0 0 0-50.19 38.29a6 6 0 0 0 10.05 6.56a82 82 0 0 1 137.48 0a6 6 0 0 0 10-6.56a93.83 93.83 0 0 0-50.14-38.29ZM38 108a46 46 0 1 1 46 46a46.06 46.06 0 0 1-46-46Zm211 97a6 6 0 0 1-8.3-1.74A81.8 81.8 0 0 0 172 166a6 6 0 0 1 0-12a46 46 0 1 0-17.08-88.73a6 6 0 1 1-4.46-11.14a58 58 0 0 1 50.14 104.3a93.83 93.83 0 0 1 50.19 38.29A6 6 0 0 1 249 205Z" /></svg>
            </div>
            <div className="icon-box-texts">
              <h2 className='text-gray-400'>Users watching</h2>
              <p className='text-black font-bold'>1,000,000</p>
            </div>
          </div>
          <div className="icon-box flex">
            <div className="icon-box-icon mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className='bg-orange-100 border-2 border-orange-100 text-orange-800 rounded-lg' viewBox="0 0 256 256"><path fill="currentColor" d="M227.19 104.48A16 16 0 0 0 240 88.81V64a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v24.81a16 16 0 0 0 12.81 15.67a24 24 0 0 1 0 47A16 16 0 0 0 16 167.19V192a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24.81a16 16 0 0 0-12.81-15.67a24 24 0 0 1 0-47ZM32 167.2a40 40 0 0 0 0-78.39V64h56v128H32Zm192 0V192H104V64h120v24.8a40 40 0 0 0 0 78.39Z" /></svg>
            </div>
            <div className="icon-box-texts">
              <h2 className='text-black font-bold'>Create Content Now</h2>
              <p className='text-gray-400'>1,000+ available</p>
            </div>
          </div>
          <div className="icon-box flex">
            <div className="icon-box-icon mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className='bg-blue-100 border-2 border-blue-100 text-blue-800 rounded-lg' viewBox="0 0 256 256"><path fill="currentColor" d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72Z" /></svg>
            </div>
            <div className="icon-box-texts">
              <h2 className='text-black font-bold'>Find our best creators</h2>
              <p className='text-gray-400'>search best audio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
