import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Movie/movieSlice"

// create a redux store and provide it in index js

export const store = configureStore({
    reducer: {
        movies : moviesReducer
    }
})