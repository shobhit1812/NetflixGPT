/* eslint-disable react/prop-types */
import { useState } from "react";
import { IMG_CDN_URL } from "../../utility/constants/constants";
import { API_OPTIONS } from "../../utility/constants/constants.js";

const MovieCard = ({ backdrop_path, movieId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieKey, setMovieKey] = useState(null);

  const fetchMovieDetails = async (id) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      setMovieDetails(json);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    fetchMovieDetails(movieId);
    fetchMovieKey(movieId);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMovieDetails(null);
    setMovieKey(null);
  };

  const fetchMovieKey = async (id) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        API_OPTIONS
      );
      const json = await data.json();
      const filterData = json?.results?.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json?.results[0];
      setMovieKey(trailer?.key);
    } catch (error) {
      console.error("Error fetching movie key:", error);
    }
  };

  const handleClick = () => {
    if (movieKey) {
      window.open(`https://www.youtube.com/watch?v=${movieKey}`, "_blank");
    }
  };

  if (!backdrop_path) return null;

  return (
    <div
      className="relative flex-shrink-0 w-44 sm:w-72 cursor-pointer transition ease delay-100 hover:-translate-y-3 hover:scale-y-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img
        src={IMG_CDN_URL + backdrop_path}
        alt="movie"
        className="rounded-lg"
      />
      {isHovered && movieDetails && (
        <div className="absolute inset-0 flex flex-col justify-start bg-black bg-opacity-70 text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">{movieDetails.title}</h2>
          <p className="text-sm mb-2 ">
            <span className="text-green-500">
              {movieDetails.vote_average} Rating{" "}
            </span>
            {movieDetails?.release_date?.split("-")[0]}
          </p>
          <p className="text-sm mb-2">Runtime: {movieDetails.runtime} min</p>
          <div className="flex flex-wrap justify-start">
            {movieDetails.genres.map((genre) => (
              <span key={genre.id} className="text-xs px-1 text-green-500">
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
