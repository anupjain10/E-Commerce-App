import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { registerValidation } from "../utilis/Validation";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // function for set formdata
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

  // get CSRF token
  const getCSRFToken = () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("csrftoken="))
      ?.split("=")[1];
  };

  const API_URL = import.meta.env.VITE_API_URL 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate form so that user must enter correct data
    const validationErrors = registerValidation(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({});

      //  Get CSRF cookie
      await axios.get("http://localhost:8000/api/accounts/csrf_cookie/", {
        withCredentials: true,
      });

      const csrfToken = getCSRFToken();
      if (!csrfToken) throw new Error("CSRF token missing");

      // POST request
      const response = await axios.post(
        "http://localhost:8000/api/accounts/register/",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
          },
        },
      );

      console.log("Data", response.data);
      console.log("Response", response);

      if (response.status === 201) {
        toast.success("Registration successfull",{ autoClose: 1500 });
        setTimeout(() => {
          navigate("/");
        }, 1700);
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response?.status === 400) {
        toast.success("User already exists", { autoClose: 1500 });
        setTimeout(() => {
          navigate("/");
        }, 1700);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-b from-[#47fdae] to-[#e1ffea]/20">
      <div className="mt-20 w-400 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-8 sm:p-10 md:p-12 rounded-2xl bg-white shadow-xl border border-gray-200">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Shopify
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          {[
            { label: "Full Name*", name: "name", type: "text", placeholder: "Enter your name" },
            { label: "Email*", name: "email", type: "email", placeholder: "Enter your email" },
            { label: "Contact*", name: "contact", type: "tel", placeholder: "Enter your phone number" },
            { label: "Password*", name: "password", type: "password", placeholder: "Enter your password" },
            { label: "Confirm Password*", name: "confirm_password", type: "password", placeholder: "Confirm your password" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col space-y-1">
              <label htmlFor={field.name} className="text-gray-700">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-3 text-base text-gray-600 border border-gray-300 rounded-lg outline-none focus:border-black transition"
              />
              {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-lg font-medium rounded-lg text-white transition
              ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#ff4141] hover:bg-[#e63a3a]"}
            `}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        {/* Terms */}
        <div className="flex items-start gap-3 text-sm text-gray-700 mt-4">
          <input type="checkbox" required className="mt-1" />
          <p>
            By continuing, I agree to the <span className="font-medium">Terms of Use</span> & <span className="font-medium">Privacy Policy</span>
          </p>
        </div>

        {/* Already have account */}
        <p className="text-center text-gray-700 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-[#ff4141] hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
