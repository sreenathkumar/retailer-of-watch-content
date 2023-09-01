import React from 'react'

export default function ProductItem() {
   return (
      <div className='product-card w-52 h-36 p-4 bg-center bg-no-repeat bg-cover rounded-2xl flex flex-col' style={{ backgroundImage: `url(${require('../../assets/images/product-card-image.webp')})` }}>
         <div className='badge'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4 px-2.5 py-1 rounded-full bg-white box-content' viewBox="0 0 16 16"><path fill="currentColor" d="M8 16c3.314 0 6-2 6-5.5c0-1.5-.5-4-2.5-6c.25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6c-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75c0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5c-.179 1-.25 2 1 3c.625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" /></svg>
         </div>
         <div className='play-btn bg-white inline relative p-px ml-auto mt-auto rounded-full'>
            <button className='btn relative z-20 p-2 text-white bg-red-400 rounded-full'>
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128Z" /></svg>
            </button>
         </div>
      </div>
   )
}
