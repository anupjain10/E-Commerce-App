import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export const Logout = ({ setUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getCSRFToken = () => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("csrftoken="))
      ?.split("=")[1];

    if (!token) console.warn("CSRF token not found");
    return token;
  };

  const handleLogout = async () => {
    try {
      // Step 1: Get CSRF cookie
      await axios.get(`${API_URL}/api/accounts/csrf_cookie`, {
        withCredentials: true,
      });

      // Step 2: Extract CSRF token (from cookies)
      const csrfToken = getCSRFToken();
      if (!csrfToken) throw new Error("CSRF token missing");

      // Step 3: Logout request
      await axios.post(
        `${API_URL}/api/accounts/logout/`,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
          },
        },
      );
      setUser(null); // update navbar state
      navigate("/login"); // redirect to login
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      aria-label="Logout"
      onClick={handleLogout}
      disabled={loading}
      className={`px-6 py-2 border border-red-400 text-red-600 rounded-full hover:bg-red-50 transition ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
};
