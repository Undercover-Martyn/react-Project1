import {configureStore} from "@reduxjs/toolkit"
import movieReducer from "../slice/movieSlice.js"
export const store = configureStore({
    reducer : {
        movies : movieReducer
    }
})