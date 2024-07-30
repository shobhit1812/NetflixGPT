/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from "../../utility/constants/constants";

const SeriesCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="flex-shrink-0 w-44 cursor-pointer transition ease-in-out delay-100 hover:-translate-y-3 hover:scale-110">
      <img src={IMG_CDN_URL + posterPath} alt="series" className="rounded-lg" />
    </div>
  );
};

export default SeriesCard;
