import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";

const usePopularMoives = ()=>{
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", options);
        const json = await data.json();
        dispatch(addPopularMovie(json.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, [])
};
export default usePopularMoives;