import { useDispatch } from "react-redux";
import {addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";
import { useSelector } from 'react-redux'

const useUpComingMovies = ()=>{
    const upComing = useSelector(store => store.movies.UpComing)
    const dispatch = useDispatch();
    const getUpComingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", options);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
    }

    useEffect(() => {
        !upComing && getUpComingMovies();
    }, [])
};
export default useUpComingMovies;