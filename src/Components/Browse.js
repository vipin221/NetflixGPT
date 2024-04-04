import Header from './Header'
import useNowPlayingMovies from '../hooks/seNowPlayingMovies'
import VideoBanner from './VideoBanner';
import Moviecontainer from './Moviecontainer';
import usePopularMoives from '../hooks/usePopularMoives';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMoives();
  useTopRatedMovies();
  useUpComingMovies();
 

  return (
    <div>
      <Header/>
      <VideoBanner/>
      <Moviecontainer/>
    </div>
      
  )
}

export default Browse
