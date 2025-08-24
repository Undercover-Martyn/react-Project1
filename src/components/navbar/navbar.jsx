import { useDispatch } from "react-redux";
import { useState} from "react";
import { setSearchValue, setGenreValue,setRankValue } from "../../slice/movieSlice";
function Navbar() {
  const [localSearch, setLocalSearch] = useState('');
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    setLocalSearch(e.target.value);
  };
  const handleSearchClick = () => {
    dispatch(setSearchValue(localSearch));
  };
  const handleKey = (e) => {
    if (e.key == "Enter") {
      handleSearchClick()
    }
  }
  const handleDropdown = (e) => {
      dispatch(setGenreValue(e.target.value))
  }
  const handleRankChange = (e) => {
    dispatch(setRankValue(e.target.value))
    console.log("rank = ",e.target.value)
  }

  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="mb-5 h-[60px] flex items-center bg-[wheat] w-[100%]">
        <a href="#" className="text-xl font-bold pr-2">
          🎬 MyMovies
        </a>

        <div className="relative">
          <input
            type="text"
            placeholder="Search movies..."
            className="ml-10 pl-5 pr-10 w-auto py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white "
            value={localSearch}
            onChange={handleInputChange}
            onKeyDown={handleKey}
          />
          <button onClick={handleSearchClick} className="absolute right-3 top-2.5 text-gray-500">🔍</button>
        </div>

        <div className="ml-auto">
          <select  onChange={handleDropdown}   className="bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All</option>
            <option>Classic</option>
            <option>Horror</option>
            <option>Animation</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Family</option>
            <option>Mystery</option>
            <option>Western</option>
          </select>
          <select onChange={handleRankChange}   className="bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2">
            <option>Rating</option>
            <option>top 10</option>
            <option>top 100</option>

          </select>
        </div>
      </div>
    </>);
}

export default Navbar;
