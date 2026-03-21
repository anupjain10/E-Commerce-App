import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginValidation } from "../utilis/Validation";
import { toast } from "react-toastify";
import axios from "axios";
import checkAuth from "../components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const getCSRFToken = () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("csrftoken="))
      ?.split("=")[1];
  };

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = loginValidation(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({});

      // 1. Get CSRF cookie
      await axios.get(`${API_URL}/api/accounts/csrf_cookie/`, {
        withCredentials: true,
      });

      const csrfToken = getCSRFToken();
      if (!csrfToken) throw new Error("CSRF token missing");

      // Login request
      const response = await axios.post(
        `${API_URL}/api/accounts/login/`,
        formData,
        {
          withCredentials: true,
          headers: {
            "X-CSRFToken": csrfToken,
          },
        },
      );
      console.log("Response", response);
      // Success
      toast.success("Login successful", { autoClose: 1500 });
      setTimeout(() => {
          navigate("/");
        }, 1700);
    } catch (error) {
      console.log("Login Error:", error);
      const message =
        error.response?.data?.message || "Something went wrong. Try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[100vh] flex justify-center items-center bg-[linear-gradient(180deg,#47fdae,#e1ffea22_60%)]">
      <div className="mt-20 h-auto w-[380px] flex flex-col gap-6 p-10 rounded-2xl bg-white shadow-xl border border-gray-200">
        {/* Title */}
        <h1 className="  text-3xl font-bold text-gray-900 text-center">
          Login
        </h1>
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          noValidate
        >
          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email" className=" text-gray-700">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 text-base text-gray-600 border border-gray-300 rounded-lg outline-none focus:border-black transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label htmlFor="password" className="text-gray-700">
              Password*
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password*"
              value={formData.password}
              onChange={handleChange}
              className=" w-full p-3 text-base text-gray-600  border border-gray-300 rounded-lg outline-none
             focus:border-black transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-lg font-medium rounded-lg text-white
            ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#ff4141] hover:bg-[#e63a3a]"}transition`}
          >
            {loading ? "Logging in..." : "Continue"}
          </button>
        </form>

        <div className="flex items-start gap-3 text-sm text-gray-700">
          <input type="checkbox" className="mt-1" />
          <p>
            By continuing, I agree to the{" "}
            <span className="font-medium">Terms of Use</span> &{" "}
            <span className="font-medium">Privacy Policy</span>
          </p>
        </div>

        {/* Do not have an Account */}
        <p className="text-center text-gray-700">
          Do not have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[#ff4141] cursor-pointer hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
