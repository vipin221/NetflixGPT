import { createSlice } from "@reduxjs/toolkit";

const useLanguageSlice = createSlice({
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

export const {changeLanguage} = useLanguageSlice.actions;
export default useLanguageSlice.reducer;