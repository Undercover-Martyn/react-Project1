import Navbar from "../../components/navbar/navbar.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../../api/movie";
import Cards from "../../components/cards/index.jsx";
import finalmovies from "../../utils/movieslelo.jsx";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovies())
    }, [])
    const FinalArray = finalmovies()
    console.log(FinalArray)
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-5 gap-4  ">

                {
                    FinalArray?.length > 0 && FinalArray.map(movie =>
                        <Cards key={movie.id} movie={movie} />
                    )
                }
            </div >
        </>
    )
}
export default Home;