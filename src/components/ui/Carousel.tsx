import React from 'react'

export default function Carousel({ children, id = 'carousel', }: { children: React.ReactNode, id: string, }) {
    return (
        <div id={id} className='overflow-hidden mx-auto py-16'>
            <div className="carousel-inner w-fit flex gap-4 px-4">
                {children}
            </div>
        </div>
    )
}
