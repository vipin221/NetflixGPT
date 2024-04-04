import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovie: null,
        trailer: null,
        PopularMovie: null,
        TopRated: null,
        UpComing: null

    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovie = action.payload;
        },
        addTrailer: (state,action) =>{
            state.trailer = action.payload;
        },
        addPopularMovie: (state,action) =>{
            state.PopularMovies = action.payload;
        },
        addTopRatedMovie: (state,action) =>{
            state.TopRated = action.payload;
        },
        addUpComingMovies: (state,action) =>{
            state.UpComing = action.payload;
        }
    }
});

export const { addNowPlayingMovie, addTrailer, addPopularMovie , addTopRatedMovie,addUpComingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;