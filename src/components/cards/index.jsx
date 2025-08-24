import tuturu from "../../assets/tu tu ru.jpg"
export default function Cards({ movie }) {

    return (
        <>
            <div className="animate-on-scroll animate-appear scroll-animate w-[290px] h-[360px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                    <a href="#">
                        <img src={tuturu} className="max-w-full max-h-40 object-contain" />
                    </a>
                    <p classnames="mb-3 font-normal text-gray-700 dark:text-gray-400">Movie Name :{movie.name}</p>
                    <p classnames="mb-3 font-normal text-gray-700 dark:text-gray-400">Genre: {movie.category}</p>
                    <p classnames="mb-3 font-normal text-gray-700 dark:text-gray-400">Rank :{movie.rank}</p>
                    <button
                        className="group flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition hover:bg-red-500 hover:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 fill-current"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.56h.56C14.09 5.01 15.76 4 17.5 4 20 4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>


                        <span className="hidden group-hover:inline">Add to Movielist</span>
                    </button>
                </div>
            </div>
        </>

    )
}


