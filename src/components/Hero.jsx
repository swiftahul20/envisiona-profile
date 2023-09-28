import React from 'react'
import HeroImage from '../assets/img/taylor-hernandez-cm_PpUQU-lk-unsplash.jpg';

const Hero = () => {
    return (
        <>
            <div className='w-full'>
                <img className='object-cover h-screen w-screen' src={HeroImage}/>
                <div class="absolute left-52 top-48">
                    <div className='flex flex-col gap-3 justify-items-start'>
                        <h1 className="text-white font-semibold text-5xl"> Welcome to Envisiona </h1>
                        <p className='pl-1 font-semibold text-lg'> Explore our interior design website and embark on a journey of inspiration.</p>
                    </div>
                    <button className='text-black font-semibold px-8 py-2 my-4 border-4 border-black hover:bg-black hover:text-white'> GET STARTED </button>
                </div>
            </div>
        </>
    )
}

export default Hero