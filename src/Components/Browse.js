import Header from './Header'
import useNowPlayingMovies from '../hooks/seNowPlayingMovies'
import VideoBanner from './VideoBanner';
import Moviecontainer from './Moviecontainer';

const Browse = () => {
  useNowPlayingMovies();
 

  return (
    <div>
      <Header/>
      <VideoBanner/>
      <Moviecontainer/>
    </div>
      
  )
}

export default Browse
