import { useState } from "react";
import { FAQ_DATA } from "../../utility/constants/constants";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const Card = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div
      className="border border-gray-600 m-1 items-center transition-all duration-300 ease-in-out"
      style={{ backgroundColor: "#2d2d2d", border: "#2d2d2d" }}
    >
      <div onClick={() => setIsVisible(!isVisible)}>
        <h1 className="text-2xl md:text-3xl font-semibold p-4 shadow-2xl cursor-pointer hover:bg-[#414141] flex justify-between transition-all duration-300">
          {title} {isVisible ? <RxCross2 /> : <GoPlus />}
        </h1>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isVisible ? "max-h-screen p-4" : "max-h-0 p-0"
        }`}
      >
        <h2 className="text-lg md:text-xl">{description}</h2>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [visibleSection, setVisibleSection] = useState("");

  const toggleVisibility = (index) => {
    setVisibleSection(visibleSection === index ? "" : index);
  };

  return (
    <>
      <div className="text-white pt-5 w-11/12 md:w-8/12 mx-auto">
        <div className="flex justify-center font-bold text-3xl md:text-5xl">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="flex flex-col mt-10 mb-12">
          {FAQ_DATA.map((faq) => (
            <Card
              key={faq.id}
              title={faq.title}
              description={faq.description}
              isVisible={visibleSection === faq.id}
              setIsVisible={() => toggleVisibility(faq.id)}
            />
          ))}
        </div>
      </div>
      <hr className="border-none h-1 bg-slate-900 mb-8" />
    </>
  );
};

export default FAQ;
