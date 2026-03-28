import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { registerValidation } from "../utilis/Validation";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    // validate form so that user must enter correct data
    const validationErrors = registerValidation(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const response = await register(formData);
    console.log("Response:", response);

    // Registeration Failed
    if (!response.success) {
      toast.error(response.message);
      setLoading(false);
      navigate("/login");
    }

    // Registeration Success
    toast.success("Registeration successful", { autoClose: 1000 });
    navigate("/");

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gradient-to-b from-[#47fdae] to-[#e1ffea]/20">
      <div className="mt-20 w-400 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-8 sm:p-10 md:p-12 rounded-2xl bg-white shadow-xl border border-gray-200">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Shopify
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          noValidate
        >
          {[
            {
              label: "Full Name*",
              name: "name",
              type: "text",
              placeholder: "Enter your name",
            },
            {
              label: "Email*",
              name: "email",
              type: "email",
              placeholder: "Enter your email",
            },
            {
              label: "Contact*",
              name: "contact",
              type: "tel",
              placeholder: "Enter your phone number",
            },
            {
              label: "Password*",
              name: "password",
              type: "password",
              placeholder: "Enter your password",
            },
            {
              label: "Confirm Password*",
              name: "confirm_password",
              type: "password",
              placeholder: "Confirm your password",
            },
          ].map((field) => (
            <div key={field.name} className="flex flex-col space-y-1">
              <label htmlFor={field.name} className="text-gray-700">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-3 text-base text-gray-600 border border-gray-300 rounded-lg outline-none focus:border-black transition"
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm">{errors[field.name]}</p>
              )}
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
            By continuing, I agree to the{" "}
            <span className="font-medium">Terms of Use</span> &{" "}
            <span className="font-medium">Privacy Policy</span>
          </p>
        </div>

        {/* Already have account */}
        <p className="text-center text-gray-700 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#ff4141] hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
