import React from 'react'
import { useSelector } from 'react-redux'
import MoivesList from './MoivesList'



const GptSearchResults = () => {
  const { movieName, movieResult } = useSelector(store => store.gptSearch);
  return (
    <div className=' px-2 py-4 '>
      <div className='flex flex-col w-screen bg-black bg-opacity-75 '>
      {movieResult?.map((movies, index) => (<MoivesList title={movieName[index]} key={movieName[index]} moviesList={movies} />))} 
    </div>
    </div>
  )
}

export default GptSearchResults
