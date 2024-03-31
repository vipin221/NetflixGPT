import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMoiveTrailer = (movie_id)=>{
    const dispatch = useDispatch();

    const fetchMovieVideo = async () => {
        const moviedata = await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/videos?language=en-US', options);
        const json = await moviedata.json();
        const trailerLists = json.results?.filter(items => items.type === "Trailer");
        const trailer = trailerLists?.length ? trailerLists[0] : json.results[0];
        dispatch(addTrailer(trailer));
    }
    useEffect(() => {
        fetchMovieVideo();
    }, [])
}
export default useMoiveTrailer;