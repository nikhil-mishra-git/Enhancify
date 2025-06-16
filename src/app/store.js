import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import imageReducer from '../features/imageSlice'

export const store = configureStore({
    reducer: {
        image: imageReducer,
    }
});