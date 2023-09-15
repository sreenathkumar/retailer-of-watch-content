import React, { useLayoutEffect, useRef } from 'react'
import '../assets/css/features.css'
import FeatureBox from './ui/FeatureBox'
import CTAButton from './ui/CTAButton'
import { gsap } from 'gsap'

export default function Features() {
   const feature = useRef<HTMLDivElement | null>(null);


   useLayoutEffect(() => {
      const mainEle = feature.current;
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  // Play the animation when the section is visible
                  if (mainEle) {
                     gsap.context(() => {
                        gsap.from('.feature-box, .feature-box h2, .feature-box p', {
                           y: 40,
                           opacity: 0,
                           duration: 2,
                           stagger: .3
                        })
                        gsap.from('.feature-box-icon svg', {
                           scale: 0,
                           delay: 0.3,
                           duration: 2
                        })
                        gsap.from('#feature-section button', {
                           scale: 0,
                           delay: 1,
                           duration: 2
                        })

                     }, mainEle)
                     observer.unobserve(mainEle);
                  }

               }
            })
         },
         {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: 0.2, // When at least 10% of the section is visible
         }
      )

      // Observe the section element
      if (mainEle) {
         observer.observe(mainEle);
      }

      // Cleanup function for when the component unmounts
      return () => {
         if (mainEle) {
            observer.unobserve(mainEle);
         }
      };

   }, [])
   return (
      <div id='feature-section' className='container px-6 py-16 mx-auto' ref={feature}>
         <div className="feature-boxs flex justify-between gap-10">
            <FeatureBox title='Listen audio of top creators' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
         ">
               <svg className='border-sky-300 bg-blue-600' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128" /><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="m108.39 270.13l-13.69 8c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12l13.69-8a16.16 16.16 0 0 0 5.78-21.87L130 276a15.74 15.74 0 0 0-21.61-5.87Zm295.22 0l13.69 8c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12l-13.69-8a16.16 16.16 0 0 1-5.78-21.87L382 276a15.74 15.74 0 0 1 21.61-5.87Z" /></svg>
            </FeatureBox>
            <FeatureBox title='Listen audio of top creators' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
         ">
               <svg className='border-indigo-300 bg-indigo-800' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128" /><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="m108.39 270.13l-13.69 8c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12l13.69-8a16.16 16.16 0 0 0 5.78-21.87L130 276a15.74 15.74 0 0 0-21.61-5.87Zm295.22 0l13.69 8c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12l-13.69-8a16.16 16.16 0 0 1-5.78-21.87L382 276a15.74 15.74 0 0 1 21.61-5.87Z" /></svg>
            </FeatureBox>
            <FeatureBox title='Listen audio of top creators' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
         ">
               <svg className='border-cyan-300 bg-cyan-400' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128" /><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="m108.39 270.13l-13.69 8c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12l13.69-8a16.16 16.16 0 0 0 5.78-21.87L130 276a15.74 15.74 0 0 0-21.61-5.87Zm295.22 0l13.69 8c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12l-13.69-8a16.16 16.16 0 0 1-5.78-21.87L382 276a15.74 15.74 0 0 1 21.61-5.87Z" /></svg>
            </FeatureBox>
         </div>
         <div className='flex justify-center mt-10'>
            <CTAButton id={undefined} name='Register Now' link='/' />
         </div>
      </div>
   )
}
