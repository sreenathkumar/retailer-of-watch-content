import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import '../assets/css/products.css';
import ProductItem from './ui/ProductItem';
import { getRandomInt } from '../utils/getRandomNumber';

export default function Products() {
   const product = useRef(null);

   // UseLayoutEffect to observe the section when it's in the viewport
   useLayoutEffect(() => {
      const currentProductRef = product.current;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  if (currentProductRef) {

                     // Create a GSAP context for the section element
                     gsap.context(() => {
                        // Run GSAP animations within this context
                        gsap.from('.product-row-1', {
                           opacity: 0,
                           columnGap: 100,
                           x: 1000,
                           duration: 2,
                           scrollTrigger: {
                              trigger: document.querySelector('#product-section'),
                              endTrigger: document.querySelector('.product-row-1'),
                              start: 'top 70%',
                              end: 'top 13%',
                              toggleActions: 'restart reverse restart none'
                           }
                        });
                        gsap.from('.product-row-2', {
                           opacity: 0,
                           columnGap: 100,
                           x: -1000,
                           duration: 2,
                           scrollTrigger: {
                              trigger: document.querySelector('#product-section'),
                              endTrigger: document.querySelector('.product-row-1'),
                              start: 'top 70%',
                              end: 'top 13%',
                              toggleActions: 'restart reverse restart none'
                           }
                        });
                     }, product);

                     observer.unobserve(currentProductRef); // Stop observing once animation is triggered
                  }
               }
            });
         },
         {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: 0.1, // When at least 10% of the section is visible
         }
      );

      // Observe the section element
      if (currentProductRef) {
         observer.observe(currentProductRef);
      }

      const container = document.querySelector('.product-card-container') as HTMLElement;

      container?.addEventListener('wheel', (e: WheelEvent) => {
         // Calculate the amount to scroll based on the wheel delta
         const scrollAmount = e.deltaY * 0.5; // Adjust this multiplier as needed

         // Calculate the new scroll position
         const newScrollLeft = container.scrollLeft + scrollAmount;

         // Set the new scroll position
         container.scrollLeft = newScrollLeft;

         // Prevent the default scroll behavior of the page
         e.preventDefault();
      });

      // Cleanup function for when the component unmounts
      return () => {
         if (currentProductRef) {
            observer.unobserve(currentProductRef);
         }
      };
   }, []);


   return (
      <div id='product-section' className='max-w-screen-xl px-6 pb-16 mx-auto' >
         <div className="products-headings text-center mb-10">
            <h1 className='font-bold'>Over 5000+ products</h1>
            <h1 className='font-bold'>available <span className='text-blue-600'>to check</span></h1>
         </div>
         <div className="product-card-container overflow-x-scroll flex flex-col gap-4" ref={product}>
            <div className="product-row-1 flex gap-4">
               {
                  [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => <ProductItem key={index} img={`img-${getRandomInt(1, 8)}.png`} />)
               }
            </div>
            <div className="product-row-2 flex gap-4">
               {
                  [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => <ProductItem key={index} img={`img-${getRandomInt(1, 8)}.png`} />)
               }
            </div>
         </div>
      </div>
   )
}
