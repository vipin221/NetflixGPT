import { Info, Play } from 'lucide-react'
import React from 'react'

const VideoBannerTitle = ({ title, overview }) => {

    return (
        <div className='absolute w-screen aspect-video flex bg-gradient-to-r from-black  items-center pl-10 md:pl-24 z-10  text-white '>
            <div className='w-1/2  xl:w-4/12'>
                <h1 className='text:2xl md:text-3xl  xl:text-4xl font-bold font-serif '>{title}</h1>
                <p className='hidden xl:inline-block text-s text-gray-300 my-2 '> {overview}</p>
                <div className='w-full flex justify-start gap-6 items-center'>
                    <button className='flex gap-2 font-bold text-black bg-[#ffffff] py-1 px-[6px] md:py-2 md:px-6 rounded-sm hover:bg-[#c3c2c2]'><Play /> Play</button>
                    <button className='hidden md:flex gap-2 font-bold text-nowrap  bg-[#8a8989] py-2 px-6 rounded-sm hover:bg-[#9d9b9b]'><Info />More Info</button>
                </div>

            </div>


        </div>
    )
}

export default VideoBannerTitle
