import axios from "axios"
import { setMovies } from "../slice/movieSlice"


export const getMovies = () => async dispatch => {
    const url = "/movies.json"
    try{
        const {data} = await axios.get(url)
        dispatch(setMovies(data)) ;
        return data
    }
    catch(err) {
        return err
    }
} 