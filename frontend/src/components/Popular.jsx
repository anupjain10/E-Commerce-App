import Item from "../components/Item";
import popularMen from "../assets/popularMen";

const Popular = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center py-10 px-4 sm:px-6 md:px-8">
      {/* Title */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          POPULAR IN MEN
        </h1>
        <div className="w-[140px] sm:w-[160px] h-[4px] bg-gray-900 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full max-w-[1300px]">
        {popularMen?.map((item, i) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              category={item.category}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
