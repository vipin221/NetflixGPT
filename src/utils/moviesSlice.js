import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovie: null,
        trailer: null
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovie = action.payload;
        },
        addTrailer: (state,action) =>{
            state.trailer = action.payload;
        }
    }
});

export const {addNowPlayingMovie, addTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;