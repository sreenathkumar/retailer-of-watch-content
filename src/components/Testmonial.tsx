import React, { useLayoutEffect, useState } from 'react'
import Carousel from './ui/Carousel'
import '../assets/css/testmonial.css'
import TestmonialCard from './ui/TestmonialCard';

export default function Testmonial({ carouselId }: { carouselId: string }) {
    const [inner, setInner] = useState<HTMLElement>();
    const [scrolledWidth, setScrolledWidth] = useState(0); // initially no scroll happened
    const [scrollableWidth, setScrollableWidth] = useState(0); // initially no scroll happened
    const [clickCount, setClickCount] = useState(0) //how many times carousel action button clicked
    const gap = 16 // window width
    const childWidth = (inner?.childNodes[0] as HTMLElement)?.offsetWidth; // width of each child
    const amountToScroll = childWidth + gap; // amount to scroll each time (child width + flex gap)

    useLayoutEffect(() => {
        const container = document.querySelector(`#${carouselId}`) as HTMLElement; // carrousel main container
        const containerInner = document.querySelector(`#${carouselId} .carousel-inner`) as HTMLElement; // carrousel inner container
        setInner(containerInner);
        //setGap(childWidth * 3); // update window width
        setScrollableWidth(Math.abs(container?.offsetWidth - containerInner?.scrollWidth)); // update scrollable width
    }, [carouselId, childWidth])

    const forward = () => {
        console.log('start for: ', gap)
        if (Math.abs(scrolledWidth) < scrollableWidth) {
            if (Math.abs(scrolledWidth) + amountToScroll > scrollableWidth) {
                //adding the css transform to the inner container
                inner!.style.transform = `translateX(${scrolledWidth - (scrollableWidth - Math.abs(scrolledWidth))}px)`;
                (inner!.childNodes[clickCount] as HTMLElement).classList.add('hidden-carousel');
                (inner!.childNodes[clickCount + 3] as HTMLElement).classList.remove('hidden-carousel');
                setScrolledWidth(scrolledWidth - (scrollableWidth - Math.abs(scrolledWidth)));
                setClickCount(clickCount + 1)
            } else {
                inner!.style.transform = `translateX(${scrolledWidth - amountToScroll}px)`;
                (inner!.childNodes[clickCount] as HTMLElement).classList.add('hidden-carousel');
                (inner!.childNodes[clickCount + 3] as HTMLElement).classList.remove('hidden-carousel');
                setScrolledWidth(scrolledWidth - amountToScroll);
                setClickCount(clickCount + 1)
            }
        } else {
            alert('end')
        }
    }
    const backward = () => {
        console.log('start back: ', clickCount)
        if (scrolledWidth < 0) {
            if (Math.abs(scrolledWidth) < amountToScroll) {
                inner!.style.transform = `translateX(${scrolledWidth + Math.abs(scrolledWidth)}px)`;
                (inner!.childNodes[clickCount - 1] as HTMLElement)?.classList.remove('hidden-carousel');
                (inner!.childNodes[clickCount + 2] as HTMLElement)?.classList.add('hidden-carousel');
                setScrolledWidth(scrolledWidth + Math.abs(scrolledWidth));
                setClickCount(clickCount - 1)
            } else {
                inner!.style.transform = `translateX(${scrolledWidth + amountToScroll}px)`
                setScrolledWidth(scrolledWidth + amountToScroll);
                (inner!.childNodes[clickCount - 1] as HTMLElement)?.classList.remove('hidden-carousel');
                (inner!.childNodes[clickCount + 2] as HTMLElement)?.classList.add('hidden-carousel');
                setClickCount(clickCount - 1)
            }
        } else {
            alert('end')
        }
    }

    return (
        <div className='max-w-screen-xl py-24 px-6 mx-auto'>
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
            <Carousel id={carouselId}>
                {[...Array(8)].map((_, i) => <TestmonialCard key={i} hidden={i > 2} />)}
            </Carousel>
        </div>
    )
}
