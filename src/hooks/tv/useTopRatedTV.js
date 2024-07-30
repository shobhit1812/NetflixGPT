import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utility/constants/constants";
import { addTopRatedTV } from "../../utility/slices/seriesSlice";

const useTopRatedTV = () => {
  const dispatch = useDispatch();

  const topRatedTV = useSelector((store) => store.movies.topRatedTV);

  const getTopRatedTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedTV(json?.results));
  };

  useEffect(() => {
    !topRatedTV && getTopRatedTV();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useTopRatedTV;
