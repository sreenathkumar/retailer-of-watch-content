import React from 'react'
import '../../assets/css/animated-svg.css'

export default function AnimatedSvg({ duration, numberOfCircles, strokeWidthClassName = 'stroke-2', strokeColorClassName = '#b3b3b3' }: { duration: number, numberOfCircles: number, strokeWidthClassName?: string, strokeColorClassName?: string }) {
    const circles = [];
    for (let i = 0; i < numberOfCircles; i++) {
        circles.push(i + 1);
    }

    return (
        <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 897 897">

            <g id="Layer_1-2" data-name="Layer 1">
                {circles.map((circle) =>
                    <circle className={`cls-1 ${strokeColorClassName + ' ' + strokeWidthClassName}  origin-center fill-none`} key={circle} style={{ animation: `anim ${duration}s linear infinite`, animationDelay: `${(circle - 1) * (duration / numberOfCircles)}s` }
                    } cx="447.5" cy="449.5" r="0" />)}

            </g>
        </svg>
    )
}
