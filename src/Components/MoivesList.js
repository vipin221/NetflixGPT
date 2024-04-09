import React from 'react'
import MovieCard from './MovieCard'

const MoivesList = (props) => {
  console.log(props.title);

  
  return (
    <div className='mb-2 '>
      <h1 className='text-2xl font-semibold text-white '>
        {props.title}
      </h1>
      <div className='flex overflow-x-auto my-2  h-64 px-4 pl-0' style={{scrollbarWidth: 'none' }} >
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
