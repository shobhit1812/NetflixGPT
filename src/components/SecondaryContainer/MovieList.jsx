/* eslint-disable react/prop-types */
import MovieCard from "../SecondaryContainer/MovieCard";
import Shimmer from "../Pages/Shimmer";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-3 pt-6 md:p-6 lg:p-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide space-x-6 pt-5">
        {movies?.length === null ? (
          <Shimmer />
        ) : (
          movies?.map((movie) => (
            <MovieCard
              key={movie?.id}
              backdrop_path={movie?.backdrop_path}
              movieId={movie?.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;
