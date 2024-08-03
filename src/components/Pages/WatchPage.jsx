import { useLocation, Link } from "react-router-dom";

const WatchPage = () => {
  const location = useLocation();
  const { movieKey } = location.state || {};

  return !movieKey ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1>No video available.</h1>
    </div>
  ) : (
    <div className="w-screen h-screen relative flex justify-center items-center">
      <Link to="/browse">
        <button className="absolute top-4 left-4 bg-red-700 hover:bg-opacity-50 text-white px-4 py-2 rounded">
          Back
        </button>
      </Link>
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${movieKey}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-white; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default WatchPage;
