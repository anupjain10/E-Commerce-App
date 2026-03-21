import arrow_icon from "../assets/arrow_icon.png";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ product }) => {
  if (!product) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 my-10 text-sm md:text-base font-medium text-gray-500 capitalize">
      
      <Link to="/" className="hover:text-gray-700 transition duration-300 ease-out">
        Home
      </Link>

      <img src={arrow_icon} alt="arrow" className="h-2 w-2 sm:h-3 sm:w-3 opacity-70" />

      <Link to="/shop" className="hover:text-gray-700 transition duration-300 ease-out">
        Shop
      </Link>

      <img src={arrow_icon} alt="arrow" className="h-2 w-2 sm:h-3 sm:w-3 opacity-70" />

      <Link to={`/${product.category}`} className="hover:text-gray-700 transition duration-300 ease-out">
        {product.category}
      </Link>

      <img src={arrow_icon} alt="arrow" className="h-2 w-2 sm:h-3 sm:w-3 opacity-70" />

      <span
        aria-current="page"
        className="text-gray-800 font-semibold truncate max-w-[150px] sm:max-w-[200px] md:max-w-[250px]"
      >
        {product.name}
      </span>
    </nav>
  );
};

export default Breadcrumbs;