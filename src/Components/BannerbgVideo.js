import React from 'react'
import useMoiveTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux';

const BannerbgVideo = ({id}) => {
    const movieTrailer = useSelector(store => store.movies?.trailer);
    useMoiveTrailer(id);
   

  return (
    <div className='w-screen aspect-video'>
          <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + movieTrailer?.key +"?si=_Utro4dwK2O911Ev?&autoplay=1&controls=0&mute=1&loop=1" }
          title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " 

        //   referrerpolicy="strict-origin-when-cross-origin" 
          ></iframe>

      
    </div>
  )
}

export default BannerbgVideo
