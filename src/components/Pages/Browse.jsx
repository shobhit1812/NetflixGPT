import Header from "../Body/Header";
import { useSelector } from "react-redux";
import MainContainer from "../MainContainer/MainContainer";
import SecondaryContainer from "../SecondaryContainer/SecondaryContainer";
import GptSearch from "../GptSearch/GptSearch";
import useNowPlayingMovies from "../../hooks/movies/useNowPlayingMovies";
import useTopRatedMovies from "../../hooks/movies/useTopRatedMovies";
import useTrendingMovies from "../../hooks/movies/useTrendingMovies";
import useAiringTodayTV from "../../hooks/tv/useAiringTodayTV";
import useTopRatedTV from "../../hooks/tv/useTopRatedTV";
import useTrendingTV from "../../hooks/tv/useTrendingTV";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // fetching the data and updating the store
  useNowPlayingMovies();
  useTopRatedMovies();
  useTrendingMovies();
  useAiringTodayTV();
  useTopRatedTV();
  useTrendingTV();

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
