import { Link } from "react-router-dom";
import arrow_icon from "../assets/arrow_icon.png";

const PageNotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl sm:leading-8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs
             hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>

          <button className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-gray-700 cursor-pointer">
            <span>Contact Support</span>
            <img src={arrow_icon} alt="arrow_icon" className="h-3 w-3" />
          </button>
        </div>
    </main>
  );
};

export default PageNotFound;
