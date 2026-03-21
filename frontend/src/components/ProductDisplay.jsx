
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("M");

  if (!product) return null;

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleAddToCart = () => {
    addToCart(product.id, selectedSize);
    toast.success("Product added to cart successfully", { autoClose: 1500 })
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start w-[90%] lg:w-[80%] mx-auto mt-16 mb-20 gap-16">
      
      {/* Image Section */}
      <div className="w-full lg:w-[420px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-2xl shadow-md hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col w-full max-w-[650px] gap-4">
        
        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
          {product.name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 text-gray-700">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="star" className="h-5" />
          ))}
          <img src={star_dull_icon} alt="star" className="h-5" />
          <p className="ml-1 text-sm">(135 reviews)</p>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-6 text-2xl font-bold mt-2">
          <div className="text-[#ff4141]">${product.new_price}</div>
          <div className="text-gray-400 line-through">
            ${product.old_price}
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-gray-600 leading-relaxed">
          {product.description}
        </p>

        {/* Size Selection */}
        <div className="flex flex-col gap-3 mt-4">
          <h2 className="text-base font-semibold text-gray-600">
            Select Size
          </h2>
          <div className="flex flex-wrap gap-4">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-5 py-2 border rounded-lg font-semibold transition
                ${
                  selectedSize === size
                    ? "bg-gray-900 text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add To Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full sm:w-[340px] py-3 mt-6 rounded-full text-base font-semibold text-white bg-[#ff4141] hover:bg-[#e63a3a] transition"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;