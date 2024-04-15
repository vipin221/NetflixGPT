import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import VideoBanner from './VideoBanner';
import Moviecontainer from './Moviecontainer';
import usePopularMoives from '../hooks/usePopularMoives';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';


const Browse = () => {
  const gptsearch = useSelector(store => store.gptSearch.toggleGptSearch);
  useNowPlayingMovies();
  usePopularMoives();
  useTopRatedMovies();
  useUpComingMovies();
  


  return (
    <div >
      <Header />
      {gptsearch ?
        <GptSearchPage /> :
         <>

          <VideoBanner />
          <Moviecontainer />
        </>
      }

    </div>

  )
}

export default Browse
