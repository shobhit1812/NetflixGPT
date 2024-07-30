import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utility/constants/constants";
import { addTrendingMovies } from "../../utility/slices/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json?.results));
  };

  useEffect(() => {
    !trendingMovies && getTrendingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTrendingMovies;
