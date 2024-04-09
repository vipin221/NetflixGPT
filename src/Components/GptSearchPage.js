import React from 'react'
import GptSearch from './GptSearch'
import GptSearchResults from './GptSearchResults'
import { BG_IMG } from '../utils/constant'

const GptSearchPage = () => {
    return (
        <div className='h-screen  '>
            <img className="fixed inset-0 w-full h-full object-cover z-[-10] blur-[1px]" alt="bg"
                src={BG_IMG}
            />
            <div className='flex items-center pt-[30%] md:pt-[10%] flex-col w-screen h-screen' >
                <GptSearch />
                <GptSearchResults />
            </div>
        </div>
    )
}

export default GptSearchPage
