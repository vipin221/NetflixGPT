import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poster}) => {
    if(!poster) return;
   
    return (
        <div className='w-32 md:w-44 rounded-lg hover:scale-x-125 hover:scale-110  cursor-pointer origin-top  transition-all'>
            <img className=' md:aspect-[7/8] rounded-lg' alt='poster' src={IMG_CDN_URL + poster} />
        </div>
    )
}

export default MovieCard;
