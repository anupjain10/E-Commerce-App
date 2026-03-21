import women from "../assets/women.webp";
import hand_icon from "../assets/hand_icon.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-16 bg-gradient-to-br from-[#47fdae] via-[#e1ffea] to-white">
      {/* Left */}
      <div className="flex flex-col max-w-xl gap-4 text-center md:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold">
          Best Deals ! Best Prices !
        </h2>

        <div className="flex items-center justify-center md:justify-start gap-3">
          <p className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-gray-900">
            New
          </p>
          <img src={hand_icon} className="h-[40px] md:h-[60px]" />
        </div>

        <p className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-gray-900">
          Collections
        </p>

        <p className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-gray-900">
          for Everyone
        </p>

        <button
          onClick={() => navigate("/men")}
          className="mt-6 w-[220px] sm:w-[260px] md:w-[280px] h-[50px] flex items-center justify-center gap-2 rounded-full text-white bg-[#ff4141] hover:bg-[#e83b3b] transition-all hover:scale-105"
        >
          Latest Collection →
        </button>
      </div>

      {/* Right */}
      <div className="flex justify-center items-center mt-10 md:mt-0">
        <img
          src={women}
          className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[430px] hover:scale-105 transition"
        />
      </div>
    </div>
  );
};

export default Hero;
