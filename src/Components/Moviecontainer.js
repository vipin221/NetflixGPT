import React from 'react'
import { useSelector } from 'react-redux'
import MoivesList from './MoivesList';
import Shimmer from './Shimmer';

const Moviecontainer = () => {
  const movie_data = useSelector(store => store.movies);
  const nowPLaying = movie_data?.nowPlayingMovie;
  const PopularMovie = movie_data?.PopularMovies;
  const TopRated = movie_data?.TopRated;
  const upComing = movie_data?.UpComing;

  if(!movie_data) return <Shimmer/>
 
  return (
    <div className='w-screen px-2 md:px-12 bg-black '>
    
      <div className='md:-my-24 lg:-my-44  xl:-my-72 relative z-40'>
        <MoivesList title={"Now Playing"} moviesList={nowPLaying} />
        <MoivesList title={"Popular"} moviesList={PopularMovie} />
        <MoivesList title={"Top Rated"} moviesList={TopRated} />
        <MoivesList title={"UpComing"} moviesList={upComing } />
      </div>
     



    </div>
  )
}

export default Moviecontainer
