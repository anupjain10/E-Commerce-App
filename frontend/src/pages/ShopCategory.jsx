import { useContext } from "react";
import Item from "../components/Item";
import dropdown from "../assets/dropdown_icon.png";
import { ShopContext } from "../context/ShopContext";

const ShopCategory = ({ banner, category }) => {
  const { all_Product } = useContext(ShopContext);

  const filteredProducts = all_Product
    .filter((item) => item.category === category)
    .slice(0, 24);

  return (
    <div className="flex flex-col justify-center mb-24 px-4 sm:px-6 lg:px-12">
      {/* Banner */}
      <img
        src={banner}
        alt="banner"
        className="w-full max-w-[1200px] mx-auto my-16 rounded-3xl shadow-sm object-cover"
      />

      {/* Top Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full max-w-[1200px] mx-auto my-8 gap-4 sm:gap-0">
        <p className="text-base sm:text-lg font-semibold text-gray-800">
          Showing 1-{filteredProducts.length} out of {all_Product.length} Products
        </p>

        {/* Sort By */}
        <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 cursor-pointer hover:shadow-md transition">
          <p className="text-sm sm:text-base font-semibold text-gray-700">Sort by</p>
          <img src={dropdown} alt="dropdown_icon" className="h-4 w-4 ml-2" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto mt-4">
        {filteredProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            category={item.category}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {/* Explore More Button */}
      <button
        className="mx-auto mt-12 sm:mt-16 w-full sm:w-44 h-12 sm:h-14 text-base sm:text-lg font-medium rounded-full bg-gray-200 text-gray-700 border hover:bg-gray-300 transition"
      >
        Explore More
      </button>
    </div>
  );
};

export default ShopCategory;