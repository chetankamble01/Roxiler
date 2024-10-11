import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust to your backend API URL

// Fetch transactions for a specific month with pagination and search
export const fetchTransactions = async (month, page = 1, perPage = 10, search = '') => {
  try {
    const { data } = await axios.get(`${API_URL}/transactions`, {
      params: { month, page, perPage, search }
    });
    return data; // Ensure the structure matches what your backend returns
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error; // Rethrow to handle it in the calling component
  }
};

// Fetch statistics for a specific month
export const fetchStatistics = async (month) => {
  try {
    const { data } = await axios.get(`${API_URL}/stats`, { params: { month } });
    return data; // Adjust this if the structure is different
  } catch (error) {
    console.error('Error fetching statistics:', error);
    throw error; // Rethrow to handle it in the calling component
  }
};

// Fetch bar chart data for a specific month
export const fetchBarChartData = async (month) => {
  try {
    const { data } = await axios.get(`${API_URL}/charts/bar`, {
      params: { month }
    });
    return data; // Adjust this if the structure is different
  } catch (error) {
    console.error('Error fetching bar chart data:', error);
    throw error; // Rethrow to handle it in the calling component
  }
};

// Fetch pie chart data for a specific month
export const fetchPieChartData = async (month) => {
  try {
    const { data } = await axios.get(`${API_URL}/charts/pie`, {
      params: { month }
    });
    return data; // Adjust this if the structure is different
  } catch (error) {
    console.error('Error fetching pie chart data:', error);
    throw error; // Rethrow to handle it in the calling component
  }
};

// Initialize database (if needed)
export const initializeDatabase = async () => {
  try {
    const { data } = await axios.post(`${API_URL}/initialize`);
    return data; // Adjust this if the structure is different
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error; // Rethrow to handle it in the calling component
  }
};
