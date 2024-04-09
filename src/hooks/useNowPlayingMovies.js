import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";
import {useSelector} from 'react-redux'

const useNowPlayingMovies = ()=>{
    const nowPLaying = useSelector(store => store.movies.nowPlayingMovie)
    const dispatch = useDispatch();
    const getNowPlayingMusic = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", options);
        const json = await data.json();
        dispatch(addNowPlayingMovie(json.results));
    }

    useEffect(() => {
        !nowPLaying && getNowPlayingMusic();
    }, [])
};
export default useNowPlayingMovies;