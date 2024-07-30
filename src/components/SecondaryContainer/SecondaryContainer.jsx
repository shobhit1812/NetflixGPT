import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";
import SeriesList from "../SecondaryContainer/SeriesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  const series = useSelector((store) => store?.series);

  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-96 relative z-40 md:-mt-52 lg:-mt-52">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies?.nowPlayingMovies}
          />
          <SeriesList
            title={"Airing Today TV"}
            series={series?.airingTodayTV}
          />
          <MovieList
            title={"Trending Movies"}
            movies={movies?.trendingMovies}
          />
          <SeriesList title={"Trending TV"} series={series?.trendingTV} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies?.topRatedMovies}
          />
          <SeriesList title={"Top Rated TV"} series={series?.topRatedTV} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
