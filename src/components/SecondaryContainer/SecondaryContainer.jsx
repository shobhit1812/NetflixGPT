import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const series = useSelector((store) => store.series);

  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-96 relative z-40 md:-mt-52 lg:-mt-52">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Airing Today"} movies={series.airingToday} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"On The Air"} movies={series.onTheAir} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
