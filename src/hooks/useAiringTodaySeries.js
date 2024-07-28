import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utility/constants/constants";
import { addAiringTodaySeries } from "../utility/slices/seriesSlice";

const useAiringTodaySeries = () => {
  const dispatch = useDispatch();

  const airingTodaySeries = useSelector((store) => store.movies.airingToday);

  const getAiringToday = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAiringTodaySeries(json?.results));
  };

  useEffect(() => {
    !airingTodaySeries && getAiringToday();
  }, []);
};

export default useAiringTodaySeries;
