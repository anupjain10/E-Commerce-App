import all_Products from "../assets/all_Product";
import Item from "./Item";

const RelatedProduct = ({ product }) => {
  if (!product) return null;

  const relatedProducts = all_Products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }
  // <section className="w-full flex flex-col items-center mt-20 mb-24 px-6">

  //   {/* Title */}
  //   <div className="flex flex-col items-center gap-3">
  //     <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
  //       Related Products
  //     </h1>
  //     <div className="w-24 h-1 bg-gray-800 rounded"></div>
  //   </div>

  //   {/* Grid */}
  //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12 w-full max-w-[1200px]">
  //     {relatedProducts.map((item) => (
  //       <Item
  //         key={item.id}
  //         id={item.id}
  //         name={item.name}
  //         image={item.image}
  //         category={item.category}
  //         new_price={item.new_price}
  //         old_price={item.old_price}
  //       />
  //     ))}
  //   </div>
  // </section>

  return (
    <section
      aria-label="Related Products"
      className="w-full flex flex-col items-center mt-16 mb-20 px-4 sm:px-6"
    >
      {/* Title */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          Related Products
        </h1>
        <div className="w-24 h-1 bg-gray-800 rounded"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mt-12 w-full max-w-[1200px]">
        {relatedProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            category={item.category}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProduct;
