const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center mt-20 mb-28 px-4 text-center gap-4">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl">
        Get Exclusive Offers on Your Email
      </h1>
      <p className="text-gray-600 text-lg">
        Subscribe to our newsletter and stay updated
      </p>

      <form className="mt-6 w-full max-w-2xl h-14 flex items-center rounded-full border border-gray-300 shadow-sm bg-white overflow-hidden">
        <input
          type="email"
          placeholder="Your Email Id"
          required
          className="flex-1 px-4 sm:px-6 h-full text-base text-gray-800 outline-none border-none rounded-l-full"
        />
        <button
          type="submit"
          className="h-full px-4 sm:px-6 md:px-8 bg-gray-900 text-white font-semibold text-base rounded-full hover:bg-gray-800 shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
