import React from 'react'
import MovieCard from './MovieCard'

const MoivesList = (props) => {

  
  return (
    <div className='mb-6 '>
      <h1 className='text-xl font-semibold text-white '>
        {props.title}
      </h1>
      <div className='flex overflow-x-auto items-center h-64 p-4 pl-0' style={{scrollbarWidth: 'none' }} >
        <div>
          <div className='flex gap-3 '>
            {props.moviesList?.map(movie => <MovieCard key={movie.id} poster={movie.poster_path} />)}
          </div>
        </div>
      </div>

    </div>
   
  ) 
}

export default MoivesList
