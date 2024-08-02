import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";
import SeriesList from "../SecondaryContainer/SeriesList";
import Footer from "../Pages/Footer";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  const series = useSelector((store) => store?.series);

  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-[480px] relative z-40 sm:mt-[250px] md:mt-[100px] lg:-mt-56">
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
        <div>
          <Footer />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
