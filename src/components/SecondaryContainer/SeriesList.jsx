/* eslint-disable react/prop-types */
import SeriesCard from "../SecondaryContainer/SeriesCard";
import Shimmer from "../Pages/Shimmer";

const SeriesList = ({ title, series }) => {
  return (
    <div className="pl-3 pt-6 md:p-6 lg:p-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide space-x-6 pt-5">
        {series?.length ? (
          series?.map((series) => (
            <SeriesCard
              key={series?.id}
              backdrop_path={series?.backdrop_path}
            />
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default SeriesList;
