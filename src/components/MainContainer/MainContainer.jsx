import { useSelector } from "react-redux";
import VideoTitle from "../MainContainer/VideoTitle";
import VideoBackground from "../MainContainer/VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative bg-black">
      <VideoTitle title={original_title} overview={overview} id={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
