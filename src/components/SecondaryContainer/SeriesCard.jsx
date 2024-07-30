/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from "../../utility/constants/constants";

const SeriesCard = ({ backdrop_path }) => {
  if (!backdrop_path) return null;

  return (
    <div className="flex-shrink-0 w-44 sm:w-72 cursor-pointer transition ease delay-100 hover:-translate-y-3 hover:scale-110">
      <img
        src={IMG_CDN_URL + backdrop_path}
        alt="series"
        className="rounded-lg"
      />
    </div>
  );
};

export default SeriesCard;
