const SectionCard = ({ title, info, photo, reverse }) => {
  return (
    <div className="text-white bg-black">
      <hr className="border-none h-1 bg-slate-900 mb-8" />
      <div
        className={`flex flex-col md:flex-row items-center p-8 md:p-16 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2 p-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <h2 className="text-lg md:text-2xl">{info}</h2>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={photo}
            alt="Section Image"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
