import React from 'react'
import AuthorImage from '../../assets/images/creator.webp'

export default function TestmonialCard() {
    return (
        <div className='testmonial-card flex flex-col rounded-md px-6 py-10 border-2 border-gray-400' style={{ minWidth: '288px' }} >
            <div className='flex gap-2 mb-4'>
                <img className='w-12 h-12 rounded-full' src={AuthorImage} alt="client_avatar" />
                <div className='flex flex-col'>
                    <h4 className='text-base font-bold mb-1'>author name</h4>
                    <span className='text-sm text-gray-400'>position</span>
                </div>
            </div>
            <div className='flex gap-2 mb-8'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="m234.5 114.38l-5.23 4.62a8 8 0 1 1-10.52-12l5.23-4.57v-.07l-8.67-.75a8 8 0 1 1 1.37-16l8.7.75a16 16 0 0 1 9.11 28.07Zm-60.7 43l2.86 12.41a8 8 0 1 0 15.59-3.6l-2.85-12.47l7.86-6.86a8 8 0 0 0-10.52-12.06l-7.86 6.87a16 16 0 0 0-5.08 15.73ZM136 51.15v133.66l.27.15l11.88 7.22a8 8 0 0 1-8.3 13.68L128 198.64l-51 31a16 16 0 0 1-23.84-17.34l13.45-58.5l-45.11-39.42a16 16 0 0 1 9.11-28.07l59.46-5.14l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l10.74.93a8 8 0 0 1-1.38 16l-10.76-.93a16 16 0 0 1-13.35-9.75ZM119.73 185l.27-.15V51.15l-15.2 36.22a16 16 0 0 1-13.35 9.75L32 102.25a.58.58 0 0 0 0 .1l45.13 39.34a16 16 0 0 1 5.07 15.71l-13.52 58.54Zm79.91 13.25a8 8 0 0 0-15.59 3.61l3.3 14.14l-11.19-6.8a8 8 0 1 0-8.31 13.68l11.23 6.82a16 16 0 0 0 23.84-17.34Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="m234.5 114.38l-5.23 4.62a8 8 0 1 1-10.52-12l5.23-4.57v-.07l-8.67-.75a8 8 0 1 1 1.37-16l8.7.75a16 16 0 0 1 9.11 28.07Zm-60.7 43l2.86 12.41a8 8 0 1 0 15.59-3.6l-2.85-12.47l7.86-6.86a8 8 0 0 0-10.52-12.06l-7.86 6.87a16 16 0 0 0-5.08 15.73ZM136 51.15v133.66l.27.15l11.88 7.22a8 8 0 0 1-8.3 13.68L128 198.64l-51 31a16 16 0 0 1-23.84-17.34l13.45-58.5l-45.11-39.42a16 16 0 0 1 9.11-28.07l59.46-5.14l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l10.74.93a8 8 0 0 1-1.38 16l-10.76-.93a16 16 0 0 1-13.35-9.75ZM119.73 185l.27-.15V51.15l-15.2 36.22a16 16 0 0 1-13.35 9.75L32 102.25a.58.58 0 0 0 0 .1l45.13 39.34a16 16 0 0 1 5.07 15.71l-13.52 58.54Zm79.91 13.25a8 8 0 0 0-15.59 3.61l3.3 14.14l-11.19-6.8a8 8 0 1 0-8.31 13.68l11.23 6.82a16 16 0 0 0 23.84-17.34Z" /></svg>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus sunt officia aliquid eos voluptate, natus id odit rem illo. Lorem ipsum dolor sit amet. </p>
            </div>
        </div>
    )
}
