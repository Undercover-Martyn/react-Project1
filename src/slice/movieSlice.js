import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    movies: [],
    searchValue : '',
    genre: 'Genre',
    rank : '',
    theme: '',
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers:{
        setMovies : (state, action) => {
            state.movies = action.payload;
        },
        setSearchValue : (state, action) => {
            state.searchValue = action.payload
        },
        setGenreValue: (state, action) => {
            state.genre = action.payload
        },
        setRankValue: (state,action) => {
            state.rank = action.payload
        },
        setTheme: (state,action) => {
            state.theme = action.payload
        }
    }
})

export  const {setMovies, setSearchValue, setGenreValue,setRankValue, setTheme} = movieSlice.actions
export default movieSlice.reducer;
