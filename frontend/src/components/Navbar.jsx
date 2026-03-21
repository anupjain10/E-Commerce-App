import shopfiylogo from "../assets/logo.webp";
import cart_icon from "../assets/cart_icon.png";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Logout } from "./Logout";
import axios from "axios";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const { getTotalCartItem } = useContext(ShopContext);
  const location = useLocation();

  const API_URL = import.meta.env.VITE_API_URL;

  // Sync menu with URL
  useEffect(() => {
    if (location.pathname === "/") setMenu("home");
    else if (location.pathname.includes("men")) setMenu("men");
    else if (location.pathname.includes("women")) setMenu("women");
    else if (location.pathname.includes("kid")) setMenu("kid");
  }, [location]);

  // Auth check
  const checkAuth = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/accounts/check_auth/`, {
        withCredentials: true,
      });

      // console.log("Data", res.data);
      // console.log("Response", res);

      setUser(res.data.email);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [location]);

  const menuItems = ["home", "men", "women", "kid"];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-10 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={shopfiylogo} alt="Logo" className="h-[40px]" />
          <p className="text-xl md:text-2xl font-bold">Shopify</p>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          {menuItems.map((item) => (
            <li key={item} className="relative">
              <Link
                to={item === "home" ? "/" : `/${item}`}
                className={`capitalize hover:text-black ${
                  menu === item ? "text-black" : ""
                }`}
              >
                {item}
              </Link>
              {/* Active Underline*/}
              {menu === item && (
                <div className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-500"></div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4 md:gap-6">
          {!loading && (
            <div className="hidden md:flex items-center gap-3">
              {!user ? (
                <>
                  <Link
                    to="/register"
                    className="text-gray-500 hover:text-black"
                  >
                    Register
                  </Link>
                  <span className="text-gray-500">or</span>
                  <Link to="/login" className="text-gray-500 hover:text-black">
                    Login
                  </Link>
                </>
              ) : (
                <Logout setUser={setUser} />
              )}
            </div>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img src={cart_icon} className="h-[32px] md:h-[38px]" />
            <div className="absolute -top-2 -right-2 md:-right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {getTotalCartItem()}
            </div>
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 flex flex-col gap-4">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item === "home" ? "/" : `/${item}s`}
              onClick={() => setIsOpen(false)}
              className="capitalize text-gray-700 hover:text-black"
            >
              {item}
            </Link>
          ))}

          <div className="border-t pt-3">
            {!loading &&
              (!user ? (
                <div className="flex flex-col gap-2">
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
              ) : (
                <Logout setUser={setUser} />
              ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
