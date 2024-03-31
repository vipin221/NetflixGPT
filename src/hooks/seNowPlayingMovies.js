import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const getNowPlayingMusic = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", options);
        const json = await data.json();
        dispatch(addNowPlayingMovie(json.results));
    }

    useEffect(() => {
        getNowPlayingMusic();
    }, [])
};
export default useNowPlayingMovies;