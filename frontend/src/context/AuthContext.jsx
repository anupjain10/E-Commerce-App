import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { fetchCSRFToken, getCSRFToken } from "../utilis/csrf";

const AuthContext = createContext();

const API_URL = import.meta.env.VITE_API_URL;

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register
  const register = async (formData) => {
    try {
      await fetchCSRFToken();
      const csrfToken = getCSRFToken();

      const response = await axios.post(
        `${API_URL}/api/accounts/register/`,
        formData,
        {
          withCredentials: true,
          headers: { "X-CSRFToken": csrfToken },
        },
      );

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "User already exits",
      };
    }
  };

  // Login
  const login = async (formData) => {
    try {
      await fetchCSRFToken();
      const csrfToken = getCSRFToken();

      const response = await axios.post(
        `${API_URL}/api/accounts/login/`,
        formData,
        {
          withCredentials: true,
          headers: { "X-CSRFToken": csrfToken },
        },
      );

      setUser(response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.log("Auth Error:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  // Logout
  const logout = async () => {
    try {
      await axios.post(
        `${API_URL}/api/accounts/logout/`,
        {},
        {
          withCredentials: true,
          headers: {
            "X-CSRFToken": getCSRFToken(),
          },
        },
      );
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const checkAuth = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/accounts/check_auth/`, {
        withCredentials: true,
      });
      setUser(res.data);
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
