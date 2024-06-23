import React from 'react'
import HeroContent from '../sub/HeroContent'
import Link from "next/link";
import StarsCanvas from './StarBackground';
const hero = () => {
    return (
        <div className='relative flex flex-col h-full w-full'>

            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[-1] object-cover ">
                <source src='/blackHole.webm' type='video/webm' />
            </video>

            <HeroContent />
            




        </div>
    )
}

export default hero