import axios from "axios"
import { setMovies } from "../slice/movieSlice"


export const getMovies = () => async dispatch => {
    const url = "http://localhost:5000/api/movies"
        try{
            const {data} = await axios.get(url)
            dispatch(setMovies(data)) ;
        }
        catch(err) {
            return err
        }
} 