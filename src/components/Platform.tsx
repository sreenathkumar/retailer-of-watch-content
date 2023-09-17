import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'
import '../assets/css/platform.css'

export default function Platform() {
    const platfrm = useRef(null);

    useLayoutEffect(() => {
        const currentPlatformRef = platfrm.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (currentPlatformRef) {
                        gsap.context(() => {
                            gsap.from('.platform-des', { opacity: 0, duration: 2, delay: 1, })
                            gsap.from('#platform-texts', { opacity: 0, y: 200, duration: 2, })
                            gsap.from('#platform-card-1', { x: -200, y: 100, opacity: 0, duration: 2, })
                            gsap.from('#platform-card-2', { y: -100, opacity: 0, duration: 2, })
                            gsap.from('#platform-card-3', { y: 200, opacity: 0, duration: 2, })
                            gsap.from('#platform-card-4', { x: 200, y: 50, opacity: 0, duration: 2, ease: 'none' })

                        }, platfrm)

                        observer.unobserve(currentPlatformRef)
                    }
                }
            })
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        if (currentPlatformRef) {
            observer.observe(currentPlatformRef)
        }

        return () => {
            if (currentPlatformRef) {
                observer.unobserve(currentPlatformRef)
            }
        }

    }, [])

    return (
        <div id='platform-section' className='max-w-screen-xl px-6 py-10 mx-auto overflow-hidden' ref={platfrm}>
            <div id='platform-texts' className="flex flex-col items-center max-w-md mx-auto ">
                <h2 className='text-3xl font-semibold mb-6'>The best platform</h2>
                <span className='platform-des text-sm text-center font-semibold mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta hic ut voluptas provident earum reiciendis id? Dolor optio excepturi non unde, quisquam saepe delectus iure cupiditate ea perferendis. Architecto, voluptatum.</span>
            </div>
            <div className="cards flex flex-col gap-6">
                <div className="flex gap-6 ">
                    <div id='platform-card-1' className='w-1/3 p-6 rounded-lg bg-pink-200 '>
                        <h3 className='mb-6 text-sm'>Adaption for any devices</h3>
                        <p className='text-xl font-bold'>View Products easily with your browser!</p>
                    </div>
                    <div id='platform-card-2' className='w-2/3 p-6 rounded-lg bg-pink-200 z-20 relative'>
                        <h3 className='mb-6 text-sm'>Stories</h3>
                        <p className='text-xl font-bold mb-10 lg:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos nam quos aut! Fugit commodi voluptates maiores recusandae corrupti. Quae.</p>
                        <span className='px-6 py-2 rounded-full inline-block border-2 border-black'><a href='/' rel=''>Read More</a></span>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div id='platform-card-3' className='w-2/3 p-6 rounded-lg bg-pink-200'>
                        <h3 className='mb-6 text-sm'>Stories</h3>
                        <p className='text-xl font-bold mb-10 lg:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos nam quos aut! Fugit commodi voluptates maiores recusandae corrupti. Quae.</p>
                        <span className='px-6 py-2 rounded-full inline-block border-2 border-black'><a href='/' rel=''>Read More</a></span>
                    </div>
                    <div id='platform-card-4' className='w-1/3 p-6 rounded-lg bg-pink-200'>
                        <h3 className='mb-6 text-sm'>Adaption for any devices</h3>
                        <p className='text-xl font-bold'>View Products easily with your browser!</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
