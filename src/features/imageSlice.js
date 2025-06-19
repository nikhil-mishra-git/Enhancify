import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image: null,
    result: null,
    loading: false,
    error: null
}

const imageSlice = createSlice({
    name: "imageReducer",
    initialState,
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
            state.result = null;
            state.error = null;
        },
        setResult: (state, action) => {
            state.result = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        resetState: () => initialState
    },
})

export const {
    setImage,
    setResult,
    setLoading,
    setError,
    resetState,
} = imageSlice.actions;
export default imageSlice.reducer;