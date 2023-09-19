import React, { useLayoutEffect, useRef, useState } from 'react'
import Carousel from './ui/Carousel'
import '../assets/css/testmonial.css'

export default function Testmonial() {
    const maxScroll = 288 + 16;

    const [scrollableWidth, setScrolllableWidth] = useState(0);
    const [completedScroll, setCompletedScroll] = useState(0);
    const carouselInner = useRef() as React.MutableRefObject<NodeListOf<HTMLElement>>;

    useLayoutEffect(() => {
        const carousel = document.getElementById('carousel') as HTMLElement;
        carouselInner.current = document.querySelectorAll('.carousel-inner') as NodeListOf<HTMLElement>;
        const invisibleItemsWidth = Math.ceil(carouselInner.current[0].scrollWidth - (carousel.getBoundingClientRect().left + carousel.offsetWidth) + carousel.getBoundingClientRect().left); //elements total width  leftside of 
        setScrolllableWidth(invisibleItemsWidth);

    }, [])

    const forward = () => {

        if (scrollableWidth > 0) {
            if (maxScroll <= scrollableWidth) {
                carouselInner.current[0].style.transform = `translateX(-${Math.abs(completedScroll) + maxScroll}px)`
                setCompletedScroll(completedScroll - maxScroll);
                setScrolllableWidth(scrollableWidth - maxScroll);
            } else {
                carouselInner.current[0].style.transform = `translateX(-${Math.abs(completedScroll) + scrollableWidth}px)`
                setCompletedScroll(completedScroll - scrollableWidth);
                setScrolllableWidth(0);
            }
        } else {
            alert('end of scroll');
        }
    }

    const backward = () => {
        if (completedScroll < 0) {
            if (maxScroll <= Math.abs(completedScroll)) {
                carouselInner.current[0].style.transform = `translateX(${completedScroll + maxScroll}px)`
                setCompletedScroll(completedScroll + maxScroll);
                setScrolllableWidth(scrollableWidth + maxScroll);
            } else {
                carouselInner.current[0].style.transform = `translateX(${0}px)`
                setScrolllableWidth(scrollableWidth + Math.abs(completedScroll));
                setCompletedScroll(0);
            }
        } else {
            alert('end of scroll');
        }
    }

    return (
        <div className='container py-24 px-6 mx-auto'>
            <div className='flex justify-between items-center max-w-xl mx-auto mb-10'>
                <div>
                    <h2 className='font-bold text-h'>What our users</h2>
                    <h2 className='font-bold text-h'>say about us</h2>
                </div>
                <div className='flex gap-2'>
                    <svg onClick={backward} className='p-2 rounded-full box-content bg-orange-400 text-white' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414l-5.657-5.657Z" /></g></svg>
                    <svg onClick={forward} className='p-2 rounded-full box-content bg-orange-400 text-white' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z" /></g></svg>
                </div>
            </div>
            <Carousel />
        </div>
    )
}
