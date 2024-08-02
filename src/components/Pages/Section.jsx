import { useSelector } from "react-redux";
import { SECTION_DATA } from "../../utility/constants/sectionsConstants";
import SectionCard from "./SectionCard";

const Section = () => {
  const changeLanguage = useSelector((store) => store.config.lang);
  return (
    <div>
      {SECTION_DATA[changeLanguage].map((section, index) => (
        <SectionCard
          key={section?.id}
          title={section?.title}
          info={section?.info}
          photo={section?.photo}
          reverse={index % 2 !== 0}
        />
      ))}
      <hr className="border-none h-1 bg-slate-900 mb-8" />
    </div>
  );
};

export default Section;
