import React from 'react'
import { useSelector } from 'react-redux'
import MoivesList from './MoivesList'



const GptSearchResults = () => {
  const { movieName, movieResult } = useSelector(store => store.gptSearch);
  return (
    <div className=''>
      <div className='flex flex-col w-screen  bg-black bg-opacity-75  p-10 m-3'>
      {movieResult?.map((movies, index) => (<MoivesList title={movieName[index]} key={movieName[index]} moviesList={movies} />))} 
    </div>
    </div>
  )
}

export default GptSearchResults
