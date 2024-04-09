import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gtp",
    initialState:{
        toggleGptSearch: false,
        movieName: null,
        movieResult: null,
    },
    reducers:{
        setToggleGptSearch:(state) =>{
            state.toggleGptSearch = !state.toggleGptSearch;
        },
        addGptMovieSearchResult:(state, action) =>{
            const { movieName, movieResult } = action.payload;
            state.movieName = movieName;
            state.movieResult = movieResult;
           
        }
    }
})

export const {setToggleGptSearch, addGptMovieSearchResult} = gptSlice.actions;
export default gptSlice.reducer;
