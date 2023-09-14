import React from 'react'
import TestmonialCard from './TestmonialCard'

export default function Carousel() {
    return (
        <div id='carousel' className='overflow-hidden mx-auto py-16'>
            <div className="carousel-inner flex gap-4 px-4">
                <TestmonialCard />
                <TestmonialCard />
                <TestmonialCard />
                <TestmonialCard />
                <TestmonialCard />
                <TestmonialCard />
                <TestmonialCard />
                <TestmonialCard />
            </div>
        </div>
    )
}
