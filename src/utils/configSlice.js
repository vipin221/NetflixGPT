import { createSlice } from "@reduxjs/toolkit";

const useConfigSlice = createSlice({
    name: "language",
    initialState:{
        language: "en"
    },
    reducers:{
        changeLanguage:(state,action) =>{
            state.language = action.payload;
        }
    }
})

export const { changeLanguage } = useConfigSlice.actions;
export default useConfigSlice.reducer;