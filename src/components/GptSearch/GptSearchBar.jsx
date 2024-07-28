import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { lang } from "../../utility/constants/languageConstants";
import { API_OPTIONS } from "../../utility/constants/constants";
import { addGptMovieResults } from "../../utility/slices/gptSlice";
import { openai } from "../../utility/constants/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const changeLanguage = useSelector((store) => store.config.lang);

  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data?.json();
    return json?.results;
  };

  const handleGptSearchClick = async () => {
    const getQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of 5 of movies, with comma separated.";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: getQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error handling
      console.error("No choices returned from GPT");
      return;
    }

    console.log(gptResults?.choices[0]?.message?.content);
    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

    const data = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(data);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResults({ movieName: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="w-full max-w-xl">
      <form
        id="form"
        className="flex items-center space-x-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          name="text"
          type="text"
          ref={searchText}
          className="text-white w-full text-xl sm:w-96 md:w-96 lg:w-96 px-4 py-2 rounded-lg bg-black bg-opacity-50 border border-white focus:outline-none focus:ring-2 focus:ring-white"
          placeholder={lang[changeLanguage].gptSearchPlaceholder}
        />
        <button
          className="text-xl border border-white bg-black bg-opacity-70 text-white hover:bg-opacity-30 rounded-lg px-4 py-2"
          onClick={handleGptSearchClick}
        >
          {lang[changeLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
