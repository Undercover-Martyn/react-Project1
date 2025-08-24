import { ReactReduxContext, useSelector } from "react-redux"
export default function finalmovies() {

    const { movies, searchValue, genre, rank } = useSelector(state => state.movies)



    function movieslelo(movies, value) {

        try {
            const filteredMovies = value?.length > 0 ? movies?.filter(movie => movie.name.toLowerCase().includes(value.toLowerCase())) : movies
            return filteredMovies
        }
        catch (err) {
            console.log(err)
        }
    }
    function moviesgenre(movies, value) {
        if (value != "All") {
            try {
                const filteredgenre = value?.length > 0 ? movies?.filter(movie => movie.category == value) : movies
                return filteredgenre;
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            return movies
        }
    }
    function movieRank(movies, value) {

        if (value != "Rating") {
            if (value == "top 10") {
                value = 10
            }
            else if (value == "top 100") {
                value = 100
            }
            try {
                const filteredrank = value > 0 ? movies?.filter(movie => movie.rank <= value) : movies
                return filteredrank;
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            return movies
        }
    }
    const returned = (movieRank((moviesgenre(movieslelo(movies, searchValue), genre)), rank))
    const returned2 = returned?.length>0? returned : movies
    return returned2

}