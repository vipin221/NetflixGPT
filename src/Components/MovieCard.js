import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poster}) => {
   
    return (
        <div className='w-44 rounded-lg hover:scale-125 transition-all cursor-pointer'>
            <img className='aspect-[7/8] rounded-lg' alt='poster' src={IMG_CDN_URL + poster} />
        </div>
    )
}

export default MovieCard;
