import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="relative w-full h-full overflow-hidden md:-top-10 lg:-top-10">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo}`}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
