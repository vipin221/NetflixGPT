import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from "./moviesSlice";
import gptSearchReducers from './gptSlice';
import languageReducer from './configSlice'


const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        gptSearch: gptSearchReducers,
        languages:languageReducer
    }   
});

export default appStore;