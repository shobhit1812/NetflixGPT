import Header from "./Header";
import Login from "./Login";
import { NETFLIX_WALLPAPER } from "../../utility/constants/constants";
import Section from "../Pages/Section";
import FAQ from "../Pages/FAQ";
import Footer from "../Pages/Footer";

const Body = () => {
  return (
    <div className="bg-black font-poppins">
      <div className="scroll-smooth relative h-screen overflow-hidden">
        <div className="relative h-full">
          <Header />

          <img
            src={NETFLIX_WALLPAPER}
            alt="wallpaper"
            className="w-full h-full object-cover"
          />

          <Login />
        </div>
      </div>

      <div>
        <Section />
      </div>

      <div>
        <FAQ />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
