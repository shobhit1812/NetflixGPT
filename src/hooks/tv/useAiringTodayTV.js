import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utility/constants/constants";
import { addAiringTodayTV } from "../../utility/slices/seriesSlice";

const useAiringTodayTV = () => {
  const dispatch = useDispatch();

  const airingTodayTV = useSelector((store) => store.movies.airingTodayTV);

  const getAiringToday = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAiringTodayTV(json?.results));
  };

  useEffect(() => {
    !airingTodayTV && getAiringToday();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAiringTodayTV;
