import { NETFLIX_WALLPAPER } from "../../utility/constants/constants";
import GptSearchBar from "../GptSearch/GptSearchBar";
import GptMovieSuggestions from "../GptSearch/GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className="relative h-screen w-screen">
      <img
        src={NETFLIX_WALLPAPER}
        alt="wallpaper"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-center justify-start h-full p-4 bg-black bg-opacity-50">
        <div className="mt-20">
          <GptSearchBar />
        </div>
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
