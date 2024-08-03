/* eslint-disable react/prop-types */
import { useState } from "react";
import { IMG_CDN_URL } from "../../utility/constants/constants";
import { API_OPTIONS } from "../../utility/constants/constants.js";

const SeriesCard = ({ backdrop_path, seriesId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [seriesDetails, setSeriesDetails] = useState(null);

  const fetchSeriesDetails = async (id) => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      setSeriesDetails(json);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    fetchSeriesDetails(seriesId);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSeriesDetails(null);
  };

  if (!backdrop_path) return null;

  return (
    <div
      className="relative flex-shrink-0 w-44 sm:w-72 cursor-pointer transition ease delay-100 hover:-translate-y-3 hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={IMG_CDN_URL + backdrop_path}
        alt="series"
        className="rounded-lg"
      />
      {isHovered && seriesDetails && (
        <div className="absolute inset-0 flex flex-col justify-start bg-black bg-opacity-70 text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">{seriesDetails.name}</h2>
          <p className="text-sm mb-2">
            <span className="text-green-500">
              {seriesDetails.vote_average} Rating{" "}
            </span>
            {seriesDetails?.first_air_date?.split("-")[0]}
          </p>
          <p className="text-sm mb-2">
            Seasons: {seriesDetails.number_of_seasons}
          </p>
          <div className="flex flex-wrap justify-start">
            {seriesDetails.genres.map((genre) => (
              <li key={genre.id} className="text-xs px-1 text-green-500">
                {genre.name}
              </li>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SeriesCard;
