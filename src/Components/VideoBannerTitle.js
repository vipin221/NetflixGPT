import { Info, Play } from 'lucide-react'
import React from 'react'

const VideoBannerTitle = ({ title, overview }) => {

    return (
        <div className='absolute w-screen aspect-video flex bg-gradient-to-r from-black  items-center pl-24 z-10  text-white '>
            <div className='w-4/12'>
                <h1 className='text-4xl font-bold font-serif '>{title}</h1>
                <p className='text-s text-gray-300 my-2 '> {overview}</p>
                <div className='w-full flex justify-start gap-6 items-center'>
                    <button className='flex gap-2 font-bold text-black bg-[#ffffff] py-2 px-6 rounded-sm hover:bg-[#c3c2c2]'><Play /> Play</button>
                    <button className='flex gap-2 font-bold  bg-[#8a8989] py-2 px-6 rounded-sm hover:bg-[#9d9b9b]'><Info />More Info</button>
                </div>

            </div>


        </div>
    )
}

export default VideoBannerTitle
