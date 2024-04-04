import { useDispatch } from "react-redux";
import {addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";

const useUpComingMovies = ()=>{
    const dispatch = useDispatch();
    const getUpComingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", options);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
    }

    useEffect(() => {
        getUpComingMovies();
    }, [])
};
export default useUpComingMovies;