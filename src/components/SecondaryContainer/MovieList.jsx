import MovieCard from "../SecondaryContainer/MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-3 pt-6 md:p-6 lg:p-6">
      <h1 className="text-3xl font-semibold text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide space-x-6 pt-5">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
