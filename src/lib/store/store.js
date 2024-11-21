'use client'
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/themeslice/ThemeSlice'
const store = configureStore(
    {
        reducer:{
        theme: themeReducer,
    },
}
);

export default  store;