import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utility/constants/constants";
import { addOnTheAir } from "../utility/slices/seriesSlice";

const useOnTheAirSeries = () => {
  const dispatch = useDispatch();

  const onTheAir = useSelector((store) => store.movies.onTheAir);

  const getOnTheAir = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addOnTheAir(json?.results));
  };

  useEffect(() => {
    !onTheAir && getOnTheAir();
  }, []);
};

export default useOnTheAirSeries;
