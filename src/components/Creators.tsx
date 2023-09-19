import React, { useLayoutEffect, useRef } from 'react'
import CreatorCard from './ui/CreatorCard'
import CreatorImg from '../assets/images/creator.webp'
import AnimatedSvg from './ui/AnimatedSvg'
import '../assets/css/creator.css'
import { gsap } from 'gsap'

export default function Creators() {
  const creator = useRef(null);

  useLayoutEffect(() => {
    const currentCratorElement = creator.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (currentCratorElement) {
              gsap.context(() => {
                gsap.from('#bg-svg g.origin-center', {
                  scale: 0,
                  duration: 3,
                })
                gsap.to('#bg-svg g.origin-center', {
                  rotate: 360,
                  duration: 3,
                  repeat: -1,
                  ease: 'none'
                })
                gsap.fromTo(['.animated-bg'],
                  {
                    y: -40,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: 'none'
                  }, {
                  y: 40,
                  duration: 3,
                  repeat: -1,
                  yoyo: true,
                  ease: 'none'
                })
                gsap.fromTo(['.box-1', '.box-3'],
                  {
                    rotate: -30,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: 'none'
                  }, {
                  rotate: 30,
                  duration: 3,
                  repeat: -1,
                  yoyo: true,
                  ease: 'none'
                })
                gsap.fromTo('#creator-1', {
                  rotate: -20,
                  y: 40,
                  duration: 3,
                  repeat: -1,
                  yoyo: true,
                  ease: 'none'
                }, {
                  rotate: 20,
                  y: -40,
                  duration: 3,
                  repeat: -1,
                  yoyo: true,
                  ease: 'none'
                })
                gsap.from('#creator-1', {
                  x: -100,
                  opacity: 0,
                  duration: 3,
                })
                gsap.fromTo('#creator-2', {
                  rotate: 20,
                  y: -40,
                  duration: 3,
                  repeat: -1,
                  yoyo: true,
                  ease: 'none'
                }, {
                  rotate: -20,
                  y: 40,
                  duration: 3,
                  repeat: -1,
                  yoyo: true,
                  ease: 'none'
                })
                gsap.from(['#creator-3', '#creator-4'], {
                  x: 100,
                  opacity: 0,
                  duration: 3,
                })
                gsap.fromTo('#creator-3', {
                  rotate: 20,
                  y: -16,
                  duration: 3,
                  repeat: -1,
                  yoyo: true,
                  ease: 'none'
                }, {
                  rotate: -20,
                  y: -96,
                  duration: 3,
                  repeat: -1,
                  yoyo: true,
                  ease: 'none'
                })
                gsap.fromTo('#creator-4', {
                  rotate: -20,
                  y: -96,
                  duration: 3,
                  repeat: -1,
                  yoyo: true,
                  ease: 'none'
                }, {
                  rotate: 20,
                  y: -16,
                  duration: 3,
                  repeat: -1,
                  yoyo: true,
                  ease: 'none'
                })

              }, creator)

              observer.unobserve(currentCratorElement)
            }
          }
        })

      }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    })
    if (currentCratorElement) {
      observer.observe(currentCratorElement);
    }
    return () => {
      if (currentCratorElement) {
        observer.unobserve(currentCratorElement)
      }
    }
  }, [])

  return (
    <div className='max-w-screen-xl px-6 py-10 mx-auto bg-gray-100 py-32 relative overflow-hidden' ref={creator}>
      <div className="background absolute top-0 left-0 z-10 w-full h-full overflow-hidden">
        <svg id="bg-svg" className='w-full h-full z-9 absolute opacity-.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 222 222"><g><g className='origin-center'><circle className="bg-svg-cls-1" cx="111.5" cy="110.5" r="21.5" /><circle className="bg-svg-cls-1" cx="111.33" cy="110.67" r="51" /><circle className="bg-svg-cls-1" cx="111.17" cy="110.83" r="80.5" /><circle className="bg-svg-cls-1" cx="111" cy="111" r="110" /><circle className="cirlce-2" cx="27" cy="40" r="5" /><circle className="circle-3" cx="10" cy="156" r="4.38" /><circle className="circle-3" cx="187" cy="30" r="4" /><circle className="circle-4" cx="192" cy="111" r="5" /><circle className="circle-5" cx="103" cy="60" r="4" /><circle className="circle-6" cx="156" cy="210" r="4" /></g></g></svg>

        <svg id='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3072 122">
          <path className="wave" d="M3072,121c-192,0-192-120-384-120c-192,0-192,120-384,120c-192,0-192-120-384-120c-192,0-192,120-384,120
		c-192,0-192-120-384-120C960,1,960,121,768,121C576,121,576,1,384,1S192,121,0,121"/>
        </svg>

        <div className="shapes flex justify-around items-center h-full">
          <div className="animated-bg overflow-hidden relative box-1 w-36 h-36 rounded-3xl bg-gray-200">
            {<AnimatedSvg duration={3} numberOfCircles={10} width={288} strokeWidth={4} strokeColorClassName='stroke-white' />}
          </div>
          <div className="animated-bg overflow-hidden relative box-2 w-56 h-56 rounded-3xl bg-red-100">
            {<AnimatedSvg duration={3} numberOfCircles={15} width={448} strokeWidth={4} />}
          </div>
          <div className="animated-bg overflow-hidden relative box-3 w-36 h-36 rounded-3xl bg-red-100">
            {<AnimatedSvg duration={3} numberOfCircles={10} width={288} strokeWidth={4} />}
          </div>
        </div>
      </div>
      <div className="contents">
        <div className='flex flex-col items-center z-20 mb-24 -translate-y-10 relative'>
          <span className='text-3xl font-bold text-h'>Enjoy listening to endless</span>
          <span className='text-3xl font-bold mb-10 text-h'>stories with your creators</span>
        </div>
        <div className='flex flex-wrap justify-around z-20 relative'>
          <CreatorCard img={CreatorImg} id={1} name='Creator' />
          <CreatorCard img={CreatorImg} id={2} name='Creator' />
          <CreatorCard img={CreatorImg} id={3} name='Creator' />
          <CreatorCard img={CreatorImg} id={4} name='Creator' />
        </div>
      </div>

    </div>
  )
}
