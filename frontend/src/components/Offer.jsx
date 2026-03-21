import men from "../assets/men.webp";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center py-16 px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-[1300px] rounded-3xl bg-gradient-to-br from-[#e1ffea]/30 via-[#47fdae]/40 to-[#e1ffea]/20 shadow-lg flex flex-col md:flex-row items-center justify-between p-6 sm:p-10 lg:p-16 gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-3 max-w-md text-center md:text-left">
          <h1 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Exclusive
          </h1>
          <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Offer For You
          </h2>
          <p className="mt-2 text-gray-700 font-medium text-sm md:text-base">
            ONLY ON BEST SELLER PRODUCTS
          </p>
          <button
            onClick={() => navigate("/men")}
            className="mt-6 w-full sm:w-[220px] h-[50px] bg-[#ff4141] text-white rounded-full text-lg font-semibold shadow-md hover:bg-[#e53b3b] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Check Now
          </button>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex">
          <img
            src={men}
            alt="Men fashion collection"
            className="h-[300px] sm:h-[350px] lg:h-[420px] drop-shadow-xl transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Mobile Image */}
        <div className="md:hidden w-full flex justify-center mb-6">
          <img
            src={men}
            alt="Men fashion collection"
            className="h-[200px] sm:h-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
