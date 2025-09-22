import axios from "axios";

const API_BASE_URL = "http://ec2-54-252-188-16.ap-southeast-2.compute.amazonaws.com:8081/api/products";  // Backend API URL

// Fetch products by category (computers, mobiles, laptops, pendrives, or all)
export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
    return response.data;  // Return products array
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array on error
  }
};

// Get product image URL
export const getProductImageUrl = (imagePath) => {
  return `http://ec2-3-26-12-51.ap-southeast-2.compute.amazonaws.com:8081/api/products/images/${imagePath}`;
};
