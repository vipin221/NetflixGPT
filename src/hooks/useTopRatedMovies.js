import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";

import { useSelector } from 'react-redux'

const useTopRatedMovies = ()=>{
    const topRated = useSelector(store => store.movies.TopRated)
    const dispatch = useDispatch();
    const getTopRatedMovie = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", options);
        const json = await data.json();
        dispatch(addTopRatedMovie(json.results));
    }

    useEffect(() => {
        !topRated && getTopRatedMovie();
    }, [])
};
export default useTopRatedMovies;