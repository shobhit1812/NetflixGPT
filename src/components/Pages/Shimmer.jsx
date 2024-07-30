import "../../index.css";

const Shimmer = () => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide space-x-6 pt-5">
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-44 h-28 sm:w-72 sm:h-44 bg-gray-700 rounded-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent shimmer"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
