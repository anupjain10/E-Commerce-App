import Item from "../components/Item";
import newCollection from "../assets/newCollection";

const NewCollection = () => {
  if (!newCollection?.length) {
    return (
      <div className="py-16 text-center text-gray-500">
        No new collections available.
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center py-16 px-4 sm:px-6 md:px-8 mb-20">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 text-center">
          NEW COLLECTIONS
        </h1>
        <div className="w-[140px] sm:w-[180px] h-[4px] bg-gray-900 rounded-full"></div>
      </div>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full max-w-[1300px]">
        {newCollection?.map((item) => (
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

export default NewCollection;
