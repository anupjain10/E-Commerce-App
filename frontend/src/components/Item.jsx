
import { Link } from "react-router-dom";

const Item = ({
  id,
  category,
  image,
  name,
  new_price,
  old_price,
}) => {
  return (
    <div className="group w-full max-w-[270px] rounded-3xl bg-white shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 overflow-hidden">
      
      {/* Image */}
      <Link to={`/${category}/product/${id}`}>
        <div className="overflow-hidden rounded-t-3xl">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-[300px] w-full  transition-all duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Text Section */}
      <div className="p-4">
        <p className="font-semibold text-gray-800 text-lg leading-tight truncate">
          {name}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-lg font-bold text-gray-900">
            ${Number(new_price).toFixed(2)}
          </span>

          {old_price && (
            <span className="text-sm font-medium text-gray-400 line-through">
              ${Number(old_price).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;