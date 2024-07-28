import { useState } from "react";
import { FaPlay, FaInfo } from "react-icons/fa";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoTitle = ({ title, overview, id }) => {
  const [showOverview, setShowOverview] = useState(true);
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(id);

  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-start pt-96 pl-2 text-white bg-gradient-to-r from-black z-30 md:p-8 lg:p-8">
      <div className="mb-5">
        <h1 className="text-6xl font-bold">{title}</h1>
        {showOverview && <p className="py-6 text-lg max-w-lg">{overview}</p>}
      </div>
      <div className="flex space-x-4">
        <a
          href={"https://www.youtube.com/watch?v=" + trailerVideo}
          rel="noreferrer"
          target="_blank"
        >
          <button className="flex items-center bg-white text-black px-6 py-2 rounded hover:bg-opacity-80 transition duration-300">
            <FaPlay className="mr-2" /> Play
          </button>
        </a>
        <button
          className="flex items-center bg-gray-300 bg-opacity-30 text-white px-6 py-2 rounded hover:bg-opacity-40 transition duration-300"
          onClick={toggleOverview}
        >
          <FaInfo className="mr-2" /> {showOverview ? "Hide Info" : "Show Info"}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
