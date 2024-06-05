import { useRef, useLayoutEffect } from 'react';
import '../assets/css/idea.css';
import CTAButton from './ui/CTAButton';
import { gsap } from 'gsap';


export default function Idea() {
   const idea = useRef(null);

   // UseLayoutEffect to observe the section when it's in the viewport
   useLayoutEffect(() => {
      const currentIdeaRef = idea.current;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  if (currentIdeaRef) {

                     // Create a GSAP context for the section element
                     gsap.context(() => {
                        // Run GSAP animations within this context
                        gsap.from('.image-wrapper .image-container', {
                           width: 30,
                           height: 30,
                           duration: 2,
                        });
                        gsap.from('.icon-list', {
                           opacity: 0,
                           duration: 2,
                        })
                        gsap.from('.question', {
                           opacity: 0,
                           scale: 0,
                           duration: 2,
                           delay: 1.5,
                        })
                        gsap.from('.result', {
                           opacity: 0,
                           scale: 0,
                           duration: 2,
                           delay: 2.1,
                        })
                        gsap.from('.timeline', {
                           opacity: 0,
                           duration: 2,
                           delay: 1.5,
                        })

                        gsap.from('#idea-btn, .idea-play-btn-group svg', {
                           scale: 0,
                           opacity: 0,
                           duration: 2,
                           stagger: 2
                        })
                        gsap.from('.idea-play-btn-group span', {
                           x: -48,
                           opacity: 0,
                           duration: 2,
                           delay: 2,
                           stagger: 2,
                        })
                        gsap.from('.idea-list-item', {
                           y: 90,
                           opacity: 0,
                           duration: 2,
                           stagger: 0.3
                        })
                        gsap.from('.image-container .play-button', {
                           rotate: -30,
                           duration: 2,
                        })
                     }, idea);

                     observer.unobserve(currentIdeaRef); // Stop observing once animation is triggered
                  }
               }
            });
         },
         {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: .6, // When at least 10% of the section is visible
         }
      );

      // Observe the section element
      if (currentIdeaRef) {
         observer.observe(currentIdeaRef);
      }

      // Cleanup function for when the component unmounts
      return () => {
         if (currentIdeaRef) {
            observer.unobserve(currentIdeaRef);
         }
      };
   }, []);

   return (
      <div id="idea-section" className='max-w-screen-xl mx-auto' ref={idea}>
         <div className='idea-section-bg pt-32 pb-10 bg-gray-200 w-full p-6'>
            <div className="idea-wrapper flex">
               <div className='idea-image md:w-2/5 flex items-center justify-center relative'>
                  <div className="image-wrapper text-center absolute">
                     <div className="image-container bg-left-bottom relative left-0 bottom-0 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${require('../assets/images/frame_bg.webp')})` }}>
                        <div className="play-button absolute top-4 -right-6">
                           <svg className='w-6 h-6 p-4 border text-white 
                         bg-orange-500 rounded-2xl border-none box-content' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128Z" />
                           </svg>
                        </div>
                        <div className="icon-list absolute top-20 -left-4 rounded-lg bg-white p-3 inline-flex flex-col gap-4">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8Z" /></svg>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m209.72 58.25l-80-24A6 6 0 0 0 122 40v113.05A46 46 0 1 0 134 184V96.06l72.28 21.69A6 6 0 0 0 214 112V64a6 6 0 0 0-4.28-5.75ZM88 218a34 34 0 1 1 34-34a34 34 0 0 1-34 34Zm114-114.06l-68-20.4V48.06l68 20.4Z" /></svg>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M48 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0Zm16 64V64a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16Zm16 0h96V64H80Zm152 48v40a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h136a16 16 0 0 1 16 16Zm-16 40v-40H80v40h136Z" /></svg>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm40-68a28 28 0 0 1-28 28h-4v8a8 8 0 0 1-16 0v-8h-16a8 8 0 0 1 0-16h36a12 12 0 0 0 0-24h-24a28 28 0 0 1 0-56h4v-8a8 8 0 0 1 16 0v8h16a8 8 0 0 1 0 16h-36a12 12 0 0 0 0 24h24a28 28 0 0 1 28 28Z" /></svg>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" /></svg>
                        </div>
                        <div className="question absolute bottom-28 -right-8 bg-white rounded-lg inline-flex flex-col">
                           <img className='rounded-t-lg' src={require('../assets/images/mobile.webp')} alt="mobile" />
                           <div className="question-texts flex flex-col p-2">
                              <span className='text-sm font-semibold'>Question</span>
                              <span className='text-xs text-gray-400'>2023-08-03</span>
                           </div>
                        </div>
                        <div className="timeline absolute bottom-4 -left-4 bg-white inline-block p-2 rounded-lg">
                           <img src={require('../assets/images/video_timeline.webp')} alt="timeline" />
                        </div>
                        <div className="result absolute -bottom-8 right-4 bg-white rounded-lg inline-flex flex-col">
                           <img className='rounded-t-lg' src={require('../assets/images/team.webp')} alt="team" />
                           <div className="result-texts flex flex-col p-2">
                              <span className='text-xs font-semibold'>Result</span>
                              <span className='text-gray-400'>2023-08-03</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='idea-texts md:w-3/5 md:ml-24'>
                  <div className="text-container">
                     <div>
                        <h1 className="heading mb-6">
                           Freedom for<br />your creative<br />ideas<span className='text-orange-500'>.</span>
                        </h1>
                        <p className="description text-gray-400 mb-6 max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quis quam saepe deserunt iusto voluptate nulla omnis minima beatae vitae.</p>
                     </div>
                     <div className="button-group flex items-center gap-4">
                        <CTAButton id={'idea-btn'} name='Get Started' link='/' />
                        <div className='idea-play-btn-group flex items-center gap-4'>
                           <svg className='w-6 h-6 p-2 border text-gray-400
                        border-gray-400 rounded-xl box-content' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128Z" /></svg>
                           <span className='text-gray-400'>How does it works?</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='pb-32 w-full px-6 pt-6'>
            <div className="container idea-footer flex">
               <div className="md:w-2/5 hidden md:block relative"></div>
               <div className="idea-list md:w-3/5 flex flex-wrap gap-4">
                  <div className="idea-list-item flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 bg-cyan-50 text-red-400 box-content p-4 rounded-full' viewBox="0 0 256 256"><path fill="currentColor" d="m209.72 58.25l-80-24A6 6 0 0 0 122 40v113.05A46 46 0 1 0 134 184V96.06l72.28 21.69A6 6 0 0 0 214 112V64a6 6 0 0 0-4.28-5.75ZM88 218a34 34 0 1 1 34-34a34 34 0 0 1-34 34Zm114-114.06l-68-20.4V48.06l68 20.4Z" /></svg>
                     <p className='text-gray-400 text-sm'>Add autdio tracks to your stories</p>
                  </div>
                  <div className="idea-list-item flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 bg-cyan-50 text-blue-800 box-content p-4 rounded-full' viewBox="0 0 256 256"><path fill="currentColor" d="m209.72 58.25l-80-24A6 6 0 0 0 122 40v113.05A46 46 0 1 0 134 184V96.06l72.28 21.69A6 6 0 0 0 214 112V64a6 6 0 0 0-4.28-5.75ZM88 218a34 34 0 1 1 34-34a34 34 0 0 1-34 34Zm114-114.06l-68-20.4V48.06l68 20.4Z" /></svg>
                     <p className='text-gray-400 text-sm'>Make money on content</p>
                  </div>
                  <div className="idea-list-item flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 bg-cyan-50 box-content text-orange-400 p-4 rounded-full' viewBox="0 0 256 256"><path fill="currentColor" d="m209.72 58.25l-80-24A6 6 0 0 0 122 40v113.05A46 46 0 1 0 134 184V96.06l72.28 21.69A6 6 0 0 0 214 112V64a6 6 0 0 0-4.28-5.75ZM88 218a34 34 0 1 1 34-34a34 34 0 0 1-34 34Zm114-114.06l-68-20.4V48.06l68 20.4Z" /></svg>
                     <p className='text-gray-400 text-sm'>Control the plot of stories</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
