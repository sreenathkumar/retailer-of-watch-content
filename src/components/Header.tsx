import React, { useState } from 'react'
import '../assets/css/header.css'
import Menu from './ui/Menu'

export default function Header() {
  const [viewPort, setViewPort] = useState(window.innerWidth);
  window.addEventListener('resize', () => {
    setViewPort(window.innerWidth);
  })
  const openDrawer = () => {
    console.log('open');

    const drawer = document.querySelector('.drawer-content');
    drawer?.classList.add('drawer-open');
  }
  const closeDrawer = () => {
    console.log('close');

    const drawer = document.querySelector('.drawer-content');
    drawer?.classList.remove('drawer-open');
  }

  return (
    <header className='w-full absolute top-0 bg-transparent z-10'>
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src='/logo.svg' className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">SLikes</span>
          </a>
          <div className={`${viewPort < 768 && 'drawer'} w-full md:block md:w-auto`} id="navbar-menu">
            <div className={`${viewPort < 768 && 'drawer-content bg-gray-200 ml-auto h-screen flex flex-col justify-between'}`}>
              {viewPort < 768 && (<>
                <svg onClick={closeDrawer} className='close-btn' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z" /></svg>
                <form>
                  <div className="flex mb-6 ">
                    <label htmlFor="location-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <div className="relative w-full">
                      <input type="search" id="location-search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search for city or address" required />
                      <button type="submit" className="absolute top-0 right-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                      </button>
                    </div>
                  </div>
                </form>
              </>)}
              <Menu />
              {
                viewPort < 768 && <div className="icons gap-2 mx-auto mt-auto flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.75a.76.76 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v16a.76.76 0 0 1-.75.75Z" /><path fill="currentColor" d="M13.5 18.75H7a.75.75 0 0 1 0-1.5h6.5A2.54 2.54 0 0 0 16.25 15a2.54 2.54 0 0 0-2.75-2.25h-3A4 4 0 0 1 6.25 9a4 4 0 0 1 4.25-3.75H16a.75.75 0 0 1 0 1.5h-5.5A2.54 2.54 0 0 0 7.75 9a2.54 2.54 0 0 0 2.75 2.25h3A4 4 0 0 1 17.75 15a4 4 0 0 1-4.25 3.75Z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 18.25a.75.75 0 0 1 0-1.5c1.66 0 2.25-.83 2.25-3.18a3.57 3.57 0 0 0-3.25-3.25a3.34 3.34 0 0 0-1 .18a.74.74 0 0 1-1-.49a5.25 5.25 0 0 0-10.25 1.56c0 3.44.76 5.18 2.25 5.18a.75.75 0 0 1 0 1.5c-2.5 0-3.75-2.25-3.75-6.68a6.75 6.75 0 0 1 13-2.68a4.4 4.4 0 0 1 .8-.07a5.07 5.07 0 0 1 4.75 4.75c-.05 1.28-.05 4.68-3.8 4.68Z" /><path fill="currentColor" d="M14.83 15.65a.77.77 0 0 1-.53-.22l-2.3-2.3l-2.3 2.3a.75.75 0 0 1-1.06-1.06l2.83-2.83a.74.74 0 0 1 1.06 0l2.83 2.83a.75.75 0 0 1 0 1.06a.79.79 0 0 1-.53.22Z" /><path fill="currentColor" d="M12 19.18a.75.75 0 0 1-.75-.75v-6.36a.75.75 0 0 1 1.5 0v6.36a.75.75 0 0 1-.75.75Z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.53 16.25c-.09 0-2.11-.36-2.11-6.25c0-4.16-2.42-6.75-6.42-6.75S5.58 5.84 5.58 10c0 6-2.09 6.25-2.08 6.25a.75.75 0 0 0 0 1.5h4.83a3.74 3.74 0 0 0 7.34 0h4.84a.75.75 0 0 0 0-1.5Zm-8.53 3a2.24 2.24 0 0 1-2.11-1.5h4.22a2.24 2.24 0 0 1-2.11 1.5Zm-6.24-3c.72-1.09 1.32-3 1.32-6.25S8.88 4.75 12 4.75s4.92 1.91 4.92 5.25s.6 5.16 1.32 6.25Z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12.25a3.75 3.75 0 1 1 3.75-3.75A3.75 3.75 0 0 1 12 12.25Zm0-6a2.25 2.25 0 1 0 2.25 2.25A2.25 2.25 0 0 0 12 6.25Zm7 13a.76.76 0 0 1-.75-.75c0-1.95-1.06-3.25-6.25-3.25s-6.25 1.3-6.25 3.25a.75.75 0 0 1-1.5 0c0-4.75 5.43-4.75 7.75-4.75s7.75 0 7.75 4.75a.76.76 0 0 1-.75.75Z" /></svg>
                </div>
              }
            </div>
          </div>
          <div className="icons gap-2 hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53Zm0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6Z" /><path fill="currentColor" d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.75a.76.76 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v16a.76.76 0 0 1-.75.75Z" /><path fill="currentColor" d="M13.5 18.75H7a.75.75 0 0 1 0-1.5h6.5A2.54 2.54 0 0 0 16.25 15a2.54 2.54 0 0 0-2.75-2.25h-3A4 4 0 0 1 6.25 9a4 4 0 0 1 4.25-3.75H16a.75.75 0 0 1 0 1.5h-5.5A2.54 2.54 0 0 0 7.75 9a2.54 2.54 0 0 0 2.75 2.25h3A4 4 0 0 1 17.75 15a4 4 0 0 1-4.25 3.75Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 18.25a.75.75 0 0 1 0-1.5c1.66 0 2.25-.83 2.25-3.18a3.57 3.57 0 0 0-3.25-3.25a3.34 3.34 0 0 0-1 .18a.74.74 0 0 1-1-.49a5.25 5.25 0 0 0-10.25 1.56c0 3.44.76 5.18 2.25 5.18a.75.75 0 0 1 0 1.5c-2.5 0-3.75-2.25-3.75-6.68a6.75 6.75 0 0 1 13-2.68a4.4 4.4 0 0 1 .8-.07a5.07 5.07 0 0 1 4.75 4.75c-.05 1.28-.05 4.68-3.8 4.68Z" /><path fill="currentColor" d="M14.83 15.65a.77.77 0 0 1-.53-.22l-2.3-2.3l-2.3 2.3a.75.75 0 0 1-1.06-1.06l2.83-2.83a.74.74 0 0 1 1.06 0l2.83 2.83a.75.75 0 0 1 0 1.06a.79.79 0 0 1-.53.22Z" /><path fill="currentColor" d="M12 19.18a.75.75 0 0 1-.75-.75v-6.36a.75.75 0 0 1 1.5 0v6.36a.75.75 0 0 1-.75.75Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.53 16.25c-.09 0-2.11-.36-2.11-6.25c0-4.16-2.42-6.75-6.42-6.75S5.58 5.84 5.58 10c0 6-2.09 6.25-2.08 6.25a.75.75 0 0 0 0 1.5h4.83a3.74 3.74 0 0 0 7.34 0h4.84a.75.75 0 0 0 0-1.5Zm-8.53 3a2.24 2.24 0 0 1-2.11-1.5h4.22a2.24 2.24 0 0 1-2.11 1.5Zm-6.24-3c.72-1.09 1.32-3 1.32-6.25S8.88 4.75 12 4.75s4.92 1.91 4.92 5.25s.6 5.16 1.32 6.25Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12.25a3.75 3.75 0 1 1 3.75-3.75A3.75 3.75 0 0 1 12 12.25Zm0-6a2.25 2.25 0 1 0 2.25 2.25A2.25 2.25 0 0 0 12 6.25Zm7 13a.76.76 0 0 1-.75-.75c0-1.95-1.06-3.25-6.25-3.25s-6.25 1.3-6.25 3.25a.75.75 0 0 1-1.5 0c0-4.75 5.43-4.75 7.75-4.75s7.75 0 7.75 4.75a.76.76 0 0 1-.75.75Z" /></svg>
          </div>
          <button onClick={openDrawer} data-collapse-toggle="navbar-menu" type="button" className="inline-flex cursor-pointer items-center p-2 w-10 h-10 z-10 justify-center text-sm text-black rounded-lg md:hidden" aria-controls="navbar-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </nav>

    </header>
  )
}
