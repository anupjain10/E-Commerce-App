import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";


export const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout(); // logout call
      navigate("/login"); // 
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
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