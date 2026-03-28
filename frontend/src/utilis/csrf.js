import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchCSRFToken = async () => {
  await axios.get(`${API_URL}/api/accounts/csrf_cookie/`, {
    withCredentials: true,
  });
};

export const getCSRFToken = () => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken="));

  return cookie ? cookie.split("=")[1] : null;
};