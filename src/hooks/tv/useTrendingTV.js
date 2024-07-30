import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utility/constants/constants";
import { addTrendingTV } from "../../utility/slices/seriesSlice";

const useTrendingTV = () => {
  const dispatch = useDispatch();

  const trendingTV = useSelector((store) => store.movies.trendingTV);

  const getTrendingTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingTV(json?.results));
  };

  useEffect(() => {
    !trendingTV && getTrendingTV();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTrendingTV;
