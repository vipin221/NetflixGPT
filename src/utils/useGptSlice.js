import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gtp",
    initialState:{
        toggleGptSearch: false,
    },
    reducers:{
        setToggleGptSearch:(state) =>{
            state.toggleGptSearch = !state.toggleGptSearch;
        }
    }
})

export const {setToggleGptSearch} = gptSlice.actions;
export default gptSlice.reducer;
