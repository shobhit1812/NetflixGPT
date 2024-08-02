import { useSelector } from "react-redux";
import { FOOTER_PAGE_CONSTANTS } from "../../utility/constants/languageConstants.js";

const Footer = () => {
  const changeLanguage = useSelector((store) => store.config.lang);
  return (
    <div className="text-white text-base p-5 pb-10 flex justify-center">
      <h1>
        <a
          href="https://github.com/Shobhit1812"
          target="_blank"
          className="hover:text-[#414141]"
        >
          {FOOTER_PAGE_CONSTANTS[changeLanguage]?.name}
        </a>{" "}
        {FOOTER_PAGE_CONSTANTS[changeLanguage]?.span1}{" "}
        <span className="italic">
          {FOOTER_PAGE_CONSTANTS[changeLanguage]?.span2}{" "}
        </span>
        {FOOTER_PAGE_CONSTANTS[changeLanguage]?.span3}
      </h1>
    </div>
  );
};

export default Footer;
