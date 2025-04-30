import axios from "axios";

// Get base URL from env variable
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const generateDietPlan = async (userData) => {
  const response = await axios.post(`${BASE_URL}/generate-diet`, userData);
  return response.data;
};
