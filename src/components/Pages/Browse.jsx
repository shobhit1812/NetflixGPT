import Header from "../Body/Header";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import useAiringTodaySeries from "../../hooks/useAiringTodaySeries";
import useOnTheAirSeries from "../../hooks/useOnTheAirSeries";
import GptSearch from "../GptSearch/GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // fetching the data and updating the store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodaySeries();
  useOnTheAirSeries();

  return (
    <div className="scroll-smooth font-poppins w-full h-screen">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <div className="w-full h-full flex flex-col">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
