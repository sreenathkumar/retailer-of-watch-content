import React from 'react'
import '../../assets/css/animated-svg.css'

export default function AnimatedSvg({ id, width, duration, numberOfCircles, strokeWidth = 2, strokeColorClassName = 'stroke-gray-400', position = 'right-0' }: { id?: string, width?: number, duration: number, numberOfCircles: number, strokeWidth?: number, strokeColorClassName?: string, position?: string }) {
    const circles = [];
    for (let i = 0; i < numberOfCircles; i++) {
        circles.push(i + 1);
    }

    return (
        <svg id={id} className={`absolute ${position}`} style={{ width: `${width}px` }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 897 897">
            <g id="Layer_1-2" data-name="Layer 1">
                {circles.map((circle) =>
                    <circle className={`${strokeColorClassName}  origin-center fill-none`} key={circle} style={{ strokeWidth: `${strokeWidth}px`, animation: `anim ${duration}s linear infinite`, animationDelay: `${(circle - 1) * (duration / numberOfCircles)}s` }
                    } cx="447.5" cy="449.5" r="0" />)}
            </g>
        </svg>
    )
}
