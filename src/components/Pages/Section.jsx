import { SECTION } from "../../utility/constants/constants";
import SectionCard from "./SectionCard";

const Section = () => {
  return (
    <div>
      {SECTION.map((section, index) => (
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
